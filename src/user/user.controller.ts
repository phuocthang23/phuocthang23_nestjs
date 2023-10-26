import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import User from './user.interface';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<User[]> {
    console.log('hihi');

    return await this.userService.getAllUsers();
  }

  @Get('/find')
  getCustomer() {
    return this.userService.findCustomer();
  }
}
