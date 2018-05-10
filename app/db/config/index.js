const database = 'koa2-demo';
const user = 'root';
const pass = 'root';

const options = {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  operatorsAliases: false,
};

export { database, user, pass, options };
