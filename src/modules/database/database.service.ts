import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger();

  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}

  private async runMigrations() {
    try {
      await this.dataSource.runMigrations();
      this.log('Migrations ran successfully.');
    } catch (error) {
      this.error('Failed to run scripts.', error);
    }
  }

  async onModuleInit() {
    await this.runMigrations();
  }

  private log(message: string) {
    this.logger.verbose(message, 'MigrationService');
  }

  private error(message: string, err: unknown) {
    this.logger.error(message, err);
  }
}
