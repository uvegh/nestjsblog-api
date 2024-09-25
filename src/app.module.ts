import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm'
import { FeedModule } from './feed/feed.module';
@Module({
  imports: [
    // config module allowing for our postgres module to be made available for type orm module,for method may return a dynamic module async or sync,used in nextjs to abstract interactions with the databse
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.POSTGRES_HOST,
      port:parseInt(<string>process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      autoLoadEntities:true,
      synchronize:true
    }),
    FeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
