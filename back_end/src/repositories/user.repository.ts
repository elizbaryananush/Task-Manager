import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  async createAndSave(userData: Partial<User>): Promise<User> {
    const user = this.create(userData);
    return this.save(user);
  }

  async updatePassword(userId: number, newPassword: string): Promise<void> {
    await this.update(userId, { password: newPassword });
  }
}
