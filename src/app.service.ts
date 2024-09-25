import { Injectable } from '@nestjs/common';
// logic that interacts with the db
@Injectable() // makes module injectable wherever you like
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
