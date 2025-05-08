import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCalendarEventTable1746733137208
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`calendar_event\`
      (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`calendar_id\` INT NOT NULL,
        \`name\` VARCHAR(255) NOT NULL,
        PRIMARY KEY (\`id\`),
        CONSTRAINT \`FK_calendar_event_calendar_id\` FOREIGN KEY (\`calendar_id\`) REFERENCES \`user_calendar\` (\`id\`) ON DELETE CASCADE
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
