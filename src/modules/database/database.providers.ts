import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [`${__dirname}/../**/entities/*.entity{.ts,.js}`],
        synchronize: false,
        logging: false,
        migrations: [`${__dirname}/migration/scripts/*{.ts,.js}`],
      });

      return dataSource.initialize();
    },
  },
];
