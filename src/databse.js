import MongoClient from 'mongodb';
import colors from 'colors';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser:true}); //Return a connection to a mongo DB
        const db = client.db('node-rest-api');
        console.log(`${colors.yellow('Database is connected')}`)
        return db;
    } catch (error) {
        console.log(error);
    }
}