import { Controller, Get } from '@nestjs/common';
import { UserMainService } from './user-main.service';

@Controller('user-main')
export class UserMainController {
  albumService: UserMainService;
  constructor(albumService: UserMainService) {
    this.albumService = albumService;
  }
  @Get('/album')
  async getAllAlbums() {
    return await this.albumService.findAll();
  }
  @Get('/album/:id')
  async getOneAlbum(id: number) {
    console.log('aadsadasd');
    console.log(id);
    return await this.albumService.findOne(id);
  }
}
