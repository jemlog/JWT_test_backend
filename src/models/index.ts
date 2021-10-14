// import User from './user';
 import Cloth from './cloth';
// import {associate as associateUser} from './user'

export * from './sequelize'

const db = {
  Cloth
}

export type dbType = typeof db;

// associateUser(db);