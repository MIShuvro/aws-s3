import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';
import { CreateBucketDto } from './dto/create-bucket.dto';

@Injectable()
export class S3Service {

    private s3: AWS.S3;

    constructor(private readonly config: ConfigService) {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.ACCESSKEYID,
            secretAccessKey: process.env.SECRETACCESSKEY,
            region: process.env.REGION,
        })

    }


    async createBucket(dto: CreateBucketDto) {
      //  return await this.s3.createBucket(dto)

        return new Promise((resolve, reject) => {
            this.s3.createBucket(dto, (err, data) => {
                if (!err) return resolve(data);
                return reject(err);
            });
        });
    }

}
