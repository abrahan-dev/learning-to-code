# serverless framework crud lambda

The [previous stage](../02-crud-lambda) is implemented using the [Serverless Framework](https://www.serverless.com/)

Also, it has some new features:
- Request validation with JSON schema
- New Images endpoint

# usage

- `npm install -g serverless`
- Create an iam user in aws console
- Configure Serverless to use this user `sls config credentials -o --provider aws --key XXXXX --secret XXXX --profile XXXXX`  
- `cd` into this folder  
- `npm install`
- `sls deploy -v` you might need in addition `--aws-profile XXXXX`
- The output will show the endpoints created
