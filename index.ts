/*  file system laboratory */


// blocking code
import { readFileSync } from 'fs';
import { appendFile } from 'fs/promises';

try {

    // const file = readFile('/note.txt');
    const file = readFileSync('./README.md', 'utf8');
    const splitted = file.split(' ')
    console.log(splitted.length)
    console.log((file.match(/React/ig) ?? []).length)

} catch (error) {
    console.log(error);
}