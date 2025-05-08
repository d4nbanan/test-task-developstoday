import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertTestUsers1746733834090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO \`user\` (\`name\`) VALUES
      ('Alice'), ('Bob'), ('Charlie'), ('Diana'), ('Ethan'),
      ('Fiona'), ('George'), ('Hannah'), ('Ivan'), ('Julia');
    `);

    await queryRunner.query(`
      INSERT INTO \`user_calendar\` (\`user_id\`)
      SELECT \`id\`
      FROM \`user\`;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
