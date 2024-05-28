# Reconciler

Reconciler is an API that helps you to reconcile a list of transactions with a list of expected balances, giving a starting balance.

We expect transactions as an array of objects with the following properties:

- `id`: uuid v4 for the transaction
- `date`: the UTC date and time of the transaction in format ISO 8601
- `label`: a description of the transaction
- `amount`: the amount of the transaction as a floating point number

We expect balances as an array of objects with the following properties:

- `date`: the UTC date of the balance in format YYYY-MM-DD
- `amount`: the amount of the balance as a floating point number

We normalize the transactions and balances:

- by sorting them by date in ascending order
- by removing duplicates based on the `id` property (transactions) or the `date` property (balances)

## Functional assumptions

- The validation is made synchronously.
- The caller provides the last validated balance, this is the logical starting point.
- We calculate the balance after each transaction is applied, from this starting point.
- We check if the calculated balance matches the expected balance for each new checkpoint.
- We may get one balance per day. We can get multiple transactions per day.

## Structure

I use a DDD approach to structure the code. The code is divided into layers.

Internally, I use the concept of dependency inversion to separate the domain logic from the framework logic.

Usually, I would use a repository pattern to separate the domain logic from the data access logic. But in this case, I don't need it because I don't have a persist mechanism (database, files...).

- `src/`
  - `app/` (Application layer, it contains framework specific code, separated by application)
    - `api/` (Our API - Nest.js application)
  - `context/` (Domain layer, it contains the business logic)
    - `reconciliation/` (A context, as in DDD)
      - `application/` (use cases of this context)
      - `domain/` (any other domain specific code like interfaces, entities, value objects...)
    - `shared/`
      - `domain/`
- `test/` (unit and e2e tests): it replicates the structure of the src folder
  - `app/` (e2e tests)
  - `context/` (unit tests)

## Run the application

```bash
npm install
npm run start:dev
```

## Run the tests

```bash
npm run test:unit
npm run test:e2e
```

## Endpoints

See an [example here](./test/manual-test.http).

- We expect a 200 and no body if the reconciliation is successful.

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Date: Tue, 23 Apr 2024 08:11:52 GMT
Connection: close
Content-Length: 0
```

- We expect a 400 and an error message if the reconciliation is not successful. This is an example of the error message:

```http
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 190
ETag: W/"be-tx9+Ql6N97jxCcbVDRyW8sAIv/0"
Date: Tue, 23 Apr 2024 08:11:22 GMT
Connection: close

{
  "errors": [
    {
      "balance": {
        "date": "2024-03-28",
        "amount": 6.42
      },
      "reason": "Expected 6.42, but found 6.40"
    },
    {
      "balance": {
        "date": "2024-04-28",
        "amount": 9.63
      },
      "reason": "Expected 9.63, but found 9.61"
    }
  ]
}
```

## TODO

I would like to improve the following:

- Add more tests / or test better edge cases
- Add OpenAPI documentation, as we use Nest.js, it is pretty easy to do with Swagger.
- We would need to clarify functional needs and the context of the use of this API.
- Add a layer of domain validation to ensure that the data is correct (in addition to the existing framework validation using class-validator), using value objects for example.
