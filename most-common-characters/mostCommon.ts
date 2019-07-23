'use strict';

let mostCommon = (input: Map<string, number>): Map<string, number> => {
    if (input == undefined) {
        return undefined;
    }

    input.forEach((value: number) => {
        input.forEach((value2: number, key2: string) => {
            if (value > value2 && input.size > 2) {
                input.delete(key2);
            }
        })
    })
    return input;
}

export default mostCommon;