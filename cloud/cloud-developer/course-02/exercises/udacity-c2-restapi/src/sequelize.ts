import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

const c = config.db;

// Instantiate new Sequelize instance!
const dbconfig = {
    'username': c.username,
    'password': c.password,
    'database': c.database,
    'host': c.host,
    'dialect': 'postgres',
    'storage': ':memory:',
};

export const sequelize = new Sequelize(dbconfig);
