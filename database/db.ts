import mongoose from 'mongoose';

/** 
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
*/

const mongooseConnection = {
    isConnected: 0
}

export const connect = async () => {
    if( mongooseConnection.isConnected ) {
        console.log('Ya estabamos conectados');
        return;
    }

    if( mongoose.connections.length > 0 ) {
        mongooseConnection.isConnected = mongoose.connections[0].readyState;

        if( mongooseConnection.isConnected === 1 ) {
            console.log('Usando conexion anterior');
            return;
        }

        await mongoose.disconnect();
    }

    await mongoose.connect(process.env.MONGO_URI || '');
    mongooseConnection.isConnected = 1;
    console.log('Conectado a mongoDB:', process.env.MONGO_URI);
}

export const disconnect = async () => {

    if( mongooseConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    console.log('Desconectado de mongoDB');
}