import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { CalendarEvent } from './calendar-event.entity';

@Entity()
export class UserCalendar {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.calendar, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => CalendarEvent, (calendarEvent) => calendarEvent.calendar, {
    cascade: true,
  })
  events: CalendarEvent[];
}
