import { Module } from '@nestjs/common';
import { UserMainController } from './user-main.controller';
import { UserMainService } from './user-main.service';
import { UserMainRepository } from './user-main.repository';

@Module({
  imports: [],
  controllers: [UserMainController],
  providers: [UserMainService, UserMainRepository],
})
export class UserMainModule {}
