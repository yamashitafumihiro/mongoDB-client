import { readBooks } from './ReadClient';
import {writeBooks} from "./WriteClient";

async function main() {
  try {
    const books = await readBooks();
    console.log('Books retrieved:', books);
    const audio = await writeBooks();
    console.log('audio inserted: ',audio);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();