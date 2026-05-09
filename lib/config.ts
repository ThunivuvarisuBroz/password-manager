import { Database } from 'lucide-react'
import mysql from 'mysql2/promise'


export const db = mysql.createPool({
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_ROOT_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

