# simple cloudwatch metrics

An example of a lambda function that put metrics in cloudwatch.

# usage

- `npm install`
- `npm run package`
- upload the file `http-metrics.zip` to the lambda service
- create the env variables `URL` and `SERVICE_NAME` in the console
- execute the function (optionally create an event source)
- see the metrics in cloudwatch
