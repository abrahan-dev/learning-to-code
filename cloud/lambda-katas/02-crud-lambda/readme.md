# crud lambda

An example of a lambda functions to PUT and GET items of a DynamoDB database through an Api gateway in AWS.

# usage

get-groups
- paste the lambda function [get groups](lambda-functions/get-groups/get-groups.js) in aws and create the env variable TABLE_GROUPS
- create a rest api gateway 
- create new resource GET groups mapped to get-groups lambda function
- consider configuring the CORS policy to allow this function to be called from whatever origin (lambda function response header)
- create a dynamoDb table called groups and add some items to it
- configure the lambda function role to allow scan of the that table ([iam](lambda-functions/get-groups/iam-policy.json))

get-groups-pagination
- the same applies, but a version with pagination exists [get groups pagination](lambda-functions/get-groups/get-groups-pagination.js)
- query params `limit` and `nextKey` are available

create-groups
- generate the package `npm run package`
- upload the package [put groups](lambda-functions/put-groups/dynamodb-create.zip) and create the env variable TABLE_GROUPS
- create new resource PUT groups mapped to create-group lambda function
- do not forget to deploy the api each time we add a resource
- configure the lambda function role to allow put new items ([iam](lambda-functions/put-groups/iam-policy.json))
- if you call the api from a browser, consider to configure the CORS policy within the Api gateway to create the OPTION method
