# events

The [previous stage](../03-serverless-framework-crud-lambda) + events.

Some new features:
- Put S3 images using pre-signed url
- React to S3 upload event through SNS
- Send notifications via Websocket api
- DynamoDB stream + ElasticSearch full-text search + Kibana
  
# usage

- See [previous stage](../03-serverless-framework-crud-lambda)
- `npm install wscat -g` to test websocket notifications when uploading an image to s3
