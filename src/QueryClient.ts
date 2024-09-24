import {MongoClient} from 'mongodb';

const url = 'mongodb://root:pass@localhost:27017';
const dbName = 'library';

export async function queryAudio() {
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const audioCollection = db.collection('audio');
    
    // Read: データの読み取り
    return await audioCollection.find({artist: "stuts"}).toArray();
  } finally {
    await client.close();
  }
}