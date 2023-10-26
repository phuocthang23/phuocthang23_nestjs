import { Injectable } from '@nestjs/common';
import User from './user.interface';
import * as path from 'path';
import { readFile } from 'fs/promises';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    public UserMainRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const filePath = path.join('src/user', './data/db.json');
    const users: any = await readFile(filePath, 'utf8');
    const result: User[] = JSON.parse(users);
    console.log(result);
    return result;
  }

  async findCustomer(): Promise<User> {
    return await { id: 1, email: 'thang@gmail.com', createAt: new Date() };
  }
}
