import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.entities';
import { UserMainModule } from './user-main/user-main.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    UserMainModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nestjs',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
