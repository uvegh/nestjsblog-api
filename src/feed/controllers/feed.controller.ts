import { Controller, Post,Body, Get, Put, Param } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/post.interface';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService) {

    }


    //decorator to get body of request
    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post)
    }

    @Get()
    getPost():Observable<FeedPost[]|string>{
        return this.feedService.getPost()
    }

    @Put(':id')
    update(
        @Param('id') id:number,
    
        @Body()feedPost:FeedPost
    ):Observable<UpdateResult> |Observable<string>
    {if(id){

        return this.feedService.updatePost(id,feedPost)
    }

    }
}
