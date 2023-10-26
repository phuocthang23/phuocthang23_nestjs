import { Injectable } from '@nestjs/common';
import { UserMainRepository } from './user-main.repository';

@Injectable()
export class UserMainService {
  image: UserMainRepository;

  constructor() {
    this.image = new UserMainRepository();
  }

  findAll() {
    return this.image.getAllAlbums();
  }
  findOne(id: number) {
    return this.image.getOneAlbum(id);
  }
}
