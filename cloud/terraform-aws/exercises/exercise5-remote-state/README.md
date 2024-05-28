Terraform state is stored locally by default in a terraform.tfstate file. With remote state, Terraform writes to a state file hosted in a remote data store. This provides a few advantages over a local state file like security, version control, and centralized storage. It also provides state locking, which is where only one person can modify the state file at a time, which prevents teammates from writing over each other. In AWS you can use an S3 bucket for storing the state file and a DynamoDB table for state locking.

```bash
#Create the bucket
S3NAME="terraformstate$(date | md5sum | head -c 8)"
aws s3api create-bucket \
--bucket $S3NAME \
--region us-west-2 \
--create-bucket-configuration \
LocationConstraint=us-west-2
#Enable encryption
aws s3api put-bucket-encryption \
    --bucket $S3NAME \
    --server-side-encryption-configuration={\"Rules\":[{\"ApplyServerSideEncryptionByDefault\":{\"SSEAlgorithm\":\"AES256\"}}]}
#Enable versioning
aws s3api put-bucket-versioning --bucket $S3NAME --versioning-configuration Status=Enabled
#Create a dynamoDb table    
aws dynamodb create-table \
    --table-name terraform-state-lock \
    --attribute-definitions \
        AttributeName=LockID,AttributeType=S \
    --key-schema \
        AttributeName=LockID,KeyType=HASH \
    --region us-west-2 \
    --provisioned-throughput \
        ReadCapacityUnits=20,WriteCapacityUnits=20
#Replace the name of the bucket
sed -i 's/RENAMEME!/'"${S3NAME}"'/g' main.tf
# init and apply terraform
terraform init
terraform apply
# check out the remote state file
aws s3 ls s3://$S3NAME/calabs/production/us-west-2/rslab/
```
