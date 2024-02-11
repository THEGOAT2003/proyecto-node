const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('INFO: conexion a base de datos correcta', conn.connection.name);
    } catch (error) {
        console.log('ERROR', error.message);
    }
}

module.exports = connectMongo;
//si fueran varias irian en llaves