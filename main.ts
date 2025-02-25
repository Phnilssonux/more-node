import { reverseString, countCharacters, capitalizeWords } from "./stringUtils";
import * as fs from 'fs';
import * as path from 'path';

const sentence = "Learning Node.js is important because it helps build scalable applications.";

const reversed = reverseString(sentence);
console.log("Reversed Sentence:", reversed);

const characterCount = countCharacters(sentence);
console.log("Character Count:", characterCount);

const filePath = path.join(__dirname, 'reversed.txt');

fs.writeFileSync(filePath, reversed, 'utf8');
console.log("Reversed sentence written to:", filePath);