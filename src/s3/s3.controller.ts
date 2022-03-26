import { S3Service } from './s3.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBucketDto } from './dto/create-bucket.dto';


@Controller('s3')
@ApiTags('S3')
export class S3Controller {

    constructor(private readonly s3Service: S3Service) {}

  
    @Post()
    createBucekt(@Body() dto: CreateBucketDto) {
        return this.s3Service.createBucket(dto);
    }

}
