import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { UserCalendar } from './entities/user-calendar.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_CALENDAR_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserCalendar),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'CALENDAR_EVENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserCalendar),
    inject: ['DATA_SOURCE'],
  },
];
