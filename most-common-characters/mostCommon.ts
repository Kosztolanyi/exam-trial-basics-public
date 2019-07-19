'use strict';

let mostCommon = (input: Map<string, number>): Map<string, number> => {
    input.forEach((value: number) => {
        input.forEach((value2: Number, key2: string) => {
            if (value > value2 && input.size > 2) {
                input.delete(key2);
            }
        })
    })
    return input;
}

export default mostCommon;