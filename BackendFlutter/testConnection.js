require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa con la base de datos.');
    } catch (error) {
        console.error('Error de conexión:', error.message);
    }
})();
