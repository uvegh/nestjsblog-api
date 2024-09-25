import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feed-post')
export class FeedPostEntity{
@PrimaryGeneratedColumn()
id:number;

@Column({default:''})
body:string;

@Column({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
createdt:Date

}
//create an entity because typeorm uses design pattern where each entity has its own repository obtained from the databse connection,it allows to minimize any duplicate query logic(allows for reusing queries)-basically the repo created defines the format of the entity in the db and you get access to repo methods