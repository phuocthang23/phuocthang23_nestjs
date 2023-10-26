import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class UserMainRepository {
  async getAllAlbums() {
    const albums = await fs.readFile('./src/data_dev/albums.json', 'utf-8');
    console.log(albums, 'ppppppppppppppppp');

    return JSON.parse(albums.toString());
  }
  async getOneAlbum(id: number) {
    const albums = await this.getAllAlbums();
    const albumById = albums.find((album) => album.id === id);
    return albumById;
  }
  //   async createAlbum() {
  //     const albums = this.getAllAlbums();
  //     const albumsData = JSON.parse(albums.toString());
  //     const newAlbum = {
  //       userId: 1,
  //       id: 1,
  //       title: 'quidem molestiae enim',
  //     };
  //     albumsData.push(newAlbum);
  //     await fs.writeFile('../data_dev/albums.json', JSON.stringify(albumsData));
  //     return newAlbum;
  //   }
  //   async updateAlbum() {
  //     const albums = await fs.readFile('../data_dev/albums.json', 'utf8');
  //     const albumsData = JSON.parse(albums.toString());
  //     const newAlbum = {
  //       userId: 1,
  //       id: 1,
  //       title: 'quidem molestiae enim',
  //     };
  //     albumsData.push(newAlbum);
  //     await fs.writeFile('../data_dev/albums.json', JSON.stringify(albumsData));
  //     return newAlbum;
  //   }
}
