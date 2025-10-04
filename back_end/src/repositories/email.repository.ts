import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Email } from 'src/entities/email.entity';

@Injectable()
export class EmailRepository extends Repository<Email> {
  constructor(private dataSource: DataSource) {
    super(Email, dataSource.createEntityManager());
  }
}
