# promo-coder

Test technique pour un poste de développeur backend chez [Indy](https://www.indy.fr).

## Description

This application can save Promo Codes and check if a given code is valid.

See [e2e.http](tests/apps/api/e2e.http) for API examples.

You can expect a 201 response without body when creating a new promo code.

You can expect a body message like the one below, when checking a promo code:

```json
{
  "promocode_name": "WeatherCode",
  "status": "denied",
  "reasons": [
    "Age 25 is not within range",
    "Current weather in Lyon: Rain. Weather is not clear"
  ]
}
```

### The algorithm to check a promo code

It happens in the PromoCode domain service in `context/promo-code/domain/promo-code.ts`

This is a recursive function that looks for boolean keys ("and", "or") in the promo code, if this is the case the function is called recursively upon this key until the end is reach.

I evaluate simple conditions like "age", "date" or "weather" and return a boolean value.

I use bitwise operators to accumulate the results of the conditions.

### Improvements

- Add more tests for each Restriction checker in `context/promo-code/domain/restriction/checkers`.
- Add UAT using cucumber for instance, the business rules will be explicit and easier to understand for everyone.
- In general, spend more time manually testing and refactoring. Because of the time restriction I didn't test many cases.
- Add a database, authentication, authorization, data validation, CI, CD...
- I would check the Promo code data of the request before saving it to the file. We could create Value Objects to validate the data separately and create domain exceptions if the data is not valid.
- Check the weather before checking the promo code to avoid unnecessary checks and reduce latency.

I am happy with the structure of the application, I think it is easy to understand and to extend thanks to the separation of concerns, encapsulation and the use of interfaces to define the boundaries of the domain.

On the other hand it was impossible for me to create all this code within the time frame, I had to make choices and I didn't have time to test everything.

### Folder structure

- `context/` - contains domain code
  - `promo-code/` - the code of the promo code context
    - `application/` - application services
    - `domain/` - domain interfaces and services
    - `infrastructure/` - infrastructure services and implementations

- `promo-codes/` - storage for promo code files

- `tests/` - contains tests
  - `apps/` - test applications
    - `api/` - API tests (e2e tests)
  - `context/` - unit tests
    - it replicates the structure of the `context/` folder

## Dependencies

- Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

or see [bun.sh](https://bun.sh).

Then install project dependencies:

```bash
bun install
```

## Run the application

Create a .env file in the root of the project and replace the values with your own:

```bash
cp .env.example .env
```

```bash
bun run start
```

## Execute unit tests

```bash
bun run test
```
