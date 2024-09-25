import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedService } from './services/feed.service';
import { FeedPostEntity } from './models/post.entity';
import { FeedController } from './controllers/feed.controller';


// nest g s feed/controllers/feed --flat  --no-spec [create service file  with no foler and no testing file]
@Module({
    providers:[FeedService],
    controllers:[FeedController],
    imports:[
        TypeOrmModule.forFeature([FeedPostEntity
        ])
    ]
})//decorator used to pass meta data through the class,provides more info on the object
export class FeedModule {}
