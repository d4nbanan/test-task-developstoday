import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { AddCalendarHolidaysDto } from './dto/add-calendar-holidays.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post(':userId/calendar/holidays')
  public addCalendarHolidays(
    @Param('userId') userId: number,
    @Body() dto: AddCalendarHolidaysDto,
  ) {
    return this.userService.addCalendarHolidays(userId, dto);
  }
}
