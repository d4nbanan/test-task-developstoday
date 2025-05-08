import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserTable1746733100121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`user\` (
        \`id\` INT NOT NULL AUTO_INCREMENT,
        \`name\` VARCHAR(255) NOT NULL,
        PRIMARY KEY (\`id\`)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
