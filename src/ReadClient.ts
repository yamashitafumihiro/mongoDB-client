import { MongoClient } from 'mongodb';

const url = 'mongodb://root:pass@localhost:27017';
const dbName = 'library';

export async function readBooks() {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('books');
    
    // Read: データの読み取り
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);
    
    return findResult;
  } finally {
    await client.close();
  }
}