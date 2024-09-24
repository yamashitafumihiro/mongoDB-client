import { readBooks } from './ReadClient';
import {writeBooks} from "./WriteClient";
import {queryAudio} from "./QueryClient";

async function main() {
  try {
    const books = await readBooks();
    console.log('Books retrieved:', books);
    const audio = await writeBooks();
    console.log('audio inserted: ',audio);
    const whereIsSTUTS = await queryAudio();
    console.log('STUTS is here !',whereIsSTUTS);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();