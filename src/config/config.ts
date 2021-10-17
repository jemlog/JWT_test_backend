import * as dotenv from 'dotenv'
dotenv.config()
type Config = {

  username: string,
  password: string,
  database: string,
  host: string,
 
  [key: string]: string | boolean
}

interface IConfigGroup {
  development: Config;
  test: Config;
  production: Config;
}

const config: IConfigGroup = {
  "development": {
    "username": "sjmin",
    "password": process.env.DB_PASSWORD!,
    "database": "rds_test_schema",
    "host": process.env.RDS_ENDPOINT!,
    "dialect": "mysql",
    
  },
  "test": {
    "username": "postgres",
    "password": process.env.DB_PASSWORD!,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    
  },
  "production": {
    "username": "sjmin",
    "password": process.env.DB_PASSWORD!,
    "database": "rds_test_schema",
    "host": process.env.RDS_ENDPOINT!,
    "dialect": "mysql",
   
  }
}

export default config;