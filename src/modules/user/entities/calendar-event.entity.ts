import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserCalendar } from './user-calendar.entity';

@Entity()
export class CalendarEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserCalendar, (calendar) => calendar.events, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'calendar_id' })
  calendar: UserCalendar;

  @Column({ type: 'varchar' })
  name: string;

  static createEvent(name: string) {
    const event = new CalendarEvent();
    event.name = name;

    return event;
  }
}
