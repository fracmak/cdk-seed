import { S3Stack } from './s3';
import * as sst from "@serverless-stack/resources";
import * as cdk from '@aws-cdk/core';

export default function main(app: sst.App): cdk.Stack {
  return new S3Stack(app, "s3");
}
