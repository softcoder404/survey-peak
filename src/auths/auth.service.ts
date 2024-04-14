import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  doSomething(): string {
    return 'HEY SOMETHING!';
  }
}
