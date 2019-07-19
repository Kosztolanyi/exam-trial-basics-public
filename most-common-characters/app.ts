'use strict';

import readContent from './readContent';
import countChars from './countChars';
import mostCommon from './mostCommon';

let fileName: string = 'countchar.txt';
let content: string = readContent(fileName);
let countedChars: Map<string, number> = countChars(content);
let mostCommonChars: Map<string, number> = mostCommon(countedChars);

console.log(mostCommonChars);

