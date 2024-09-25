import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/post.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class FeedService {
    constructor
        (

            @InjectRepository(FeedPostEntity)//give it a metadata
            private readonly FeedPostRepo: Repository<FeedPostEntity>) {

    }
    // observable from rxjs,use from method from rxjs to create an 
    createPost(feedPost: FeedPost):Observable<FeedPost> {
        return from (this.FeedPostRepo.save(feedPost))
    }
    getPost():Observable<FeedPost[]>{
        return from(this.FeedPostRepo.find())
    }
    
    updatePost(id:number,feedPost:FeedPost):Observable<UpdateResult>{
        return from(this.FeedPostRepo.update(id,feedPost))

    }
    deletePost(id:number):Observable<DeleteResult>{
        return from(this.FeedPostRepo.delete(id))
    }

}
