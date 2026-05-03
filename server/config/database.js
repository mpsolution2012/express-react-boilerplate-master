require('dotenv').config();

export default {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: 'utf8',
        //socketPath: process.env.SOCKET_PATH,
        port: process.env.DB_PORT,
    },
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations',
    },
    seeds: {
        directory: process.cwd() + '/server/seeds',
    },
    debug: true
};

console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);
