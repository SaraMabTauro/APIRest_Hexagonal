import * as mysql from 'mysql2/promise';
require('dotenv').config();

class DatabaseClient {
    private connection: mysql.Pool;

    constructor() {
        this.connection = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async connect(): Promise<void> {
        try {
            await this.connection.getConnection();
            console.log('Conexión a la base de datos MySQL establecida');
        } catch (error) {
            console.error('Error al conectar a la base de datos MySQL:', error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        try {
            await this.connection.end();
            console.log('Conexión a la base de datos MySQL cerrada');
        } catch (error) {
            console.error('Error al cerrar la conexión a la base de datos MySQL:', error);
            throw error;
        }
    }

    async executeQuery(sql: string, values?: any[]): Promise<any> {
        try {
            const [rows] = await this.connection.execute(sql, values);
            return rows;
        } catch (error) {
            console.error('Error al ejecutar la consulta en la base de datos MySQL:', error);
            throw error;
        }
    }
}

export { DatabaseClient };
