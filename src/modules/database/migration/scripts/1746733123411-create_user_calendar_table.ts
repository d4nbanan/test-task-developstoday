import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserCalendarTable1746733123411
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`user_calendar\` (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`user_id\` INT NOT NULL,
        PRIMARY KEY (\`id\`),
        UNIQUE KEY \`UNIQ_user_calendar_user_id\` (\`user_id\`),
        CONSTRAINT \`FK_user_calendar_user_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
