import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Email } from './email.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Email, Email => Email.user, {
    cascade: true, 
    nullable: true
  })
  @JoinColumn()
  email?: Email;
}
