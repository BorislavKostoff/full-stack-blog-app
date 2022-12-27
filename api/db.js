import mysql from 'mysql'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 't00r',
    database: 'blog'
})