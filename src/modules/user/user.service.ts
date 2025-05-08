import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddCalendarHolidaysDto } from './dto/add-calendar-holidays.dto';
import { CountryService } from '../country/country.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CalendarEvent } from './entities/calendar-event.entity';

@Injectable()
export class UserService {
  constructor(
    private countryService: CountryService,
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  public async addCalendarHolidays(
    userId: number,
    dto: AddCalendarHolidaysDto,
  ) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['calendar', 'calendar.events'],
    });
    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    const holidays = await this.countryService.getCountryHolidays(
      dto.countryCode,
      dto.year,
    );

    const foundHolidays = dto.holidays.filter((holidayName) =>
      holidays.some(
        (holiday) =>
          holiday.name === holidayName &&
          !user.calendar.events.some((event) => event.name === holidayName),
      ),
    );

    const events = foundHolidays.map((holiday) =>
      CalendarEvent.createEvent(holiday),
    );

    user.calendar.events.push(...events);
    await this.userRepository.save(user);

    return user.calendar.events;
  }
}
