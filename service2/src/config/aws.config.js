import aws from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

aws.config.update({
    accessKeyId : process.env.access_key,
    secretAccessKey : process.env.secret_access_key,
    region : process.env.region
})

const s3 = new aws.S3();

export {
    s3
}