import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CountryModule } from '../country/country.module';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CountryModule, DatabaseModule],
  providers: [UserService, ...userProviders],
  controllers: [UserController],
})
export class UserModule {}
