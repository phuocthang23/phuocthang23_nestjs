import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.interface';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    console.log('hihi');
    console.log('update hihi v1');
    console.log('update hihi v2');
    console.log('update hihi v3');

    return await this.userService.getAllUsers();
  }

  @Get('/find')
  getCustomer() {
    return this.userService.findCustomer();
  }
}
