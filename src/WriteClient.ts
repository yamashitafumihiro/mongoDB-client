import { MongoClient } from 'mongodb';

const url = 'mongodb://root:pass@localhost:27017';
const dbName = 'library';

export async function writeBooks(){
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('audio');
    
    const insertResult = await collection.insertMany([
      {title: 'mosquit', artist: 'stella donelly'},
      {title: 'maktub', artist:'jjj'},
      {title: 'oebit', artist:'stuts', guest: 'jjj'}
    ])
    console.log('Inserted documents =>');
    
    return insertResult;
  } finally {
    await client.close();
  }
}