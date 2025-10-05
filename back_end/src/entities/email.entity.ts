import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('email')
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  verificationCode: number  ;

  @OneToOne(() => User, (user) => user.email , {
    nullable: true
  })
  user?: User;
}
