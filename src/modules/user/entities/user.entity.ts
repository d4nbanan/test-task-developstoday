import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserCalendar } from './user-calendar.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @OneToOne(() => UserCalendar, (calendar) => calendar.user, { cascade: true })
  calendar: UserCalendar;
}
