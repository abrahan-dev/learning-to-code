import AWS = require('aws-sdk');
import {config} from './config/config';

const c = config.aws;

// aws manages the credentials for us in the cloud
// only needed in development
if (c.aws_profile !== 'DEPLOYED') {
    AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: c.aws_profile});
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: {Bucket: c.aws_media_bucket}
});

/* getGetSignedUrl generates an aws signed url to retrieve an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export async function getGetSignedUrl( key: string ): Promise<string> {
    return s3.getSignedUrl('getObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: 60 * 5
    });
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retrieved from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ) {
    return s3.getSignedUrl('putObject', {
        Bucket: c.aws_media_bucket,
        Key: key,
        Expires: 60 * 5
    });
}
