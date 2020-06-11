"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite',
        },
        migrations: {
            directory: './src/database/migrations',
        },
        useNullAsDefault: true,
    },
};
exports.default = configuration;
