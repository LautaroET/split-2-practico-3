import mongoose from 'mongoose'
export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexion Exitosa a MongoDB');
    } catch (error) {
        console.error('Error a Conectar a MongoDB:',error);
        porcess.exit(1);
    }
}