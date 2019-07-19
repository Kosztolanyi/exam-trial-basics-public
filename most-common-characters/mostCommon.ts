'use strict';

let mostCommon = (input: Map<string, number>): Map<string, number> => {
    while(input.size > 2){
        for (let i of input){
            for (let j of input){
                if (i[1] > j[1]){
                    input.delete(j[0]);
                }
            }
        }
    }
    return input;
}

export default mostCommon;