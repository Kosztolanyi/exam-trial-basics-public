'use strict';

let countChars = (input: string): Map<string, number> => {
    if (input == undefined) {
        return undefined;
    }
    
    let output = new Map();

    for (let i = 0; i < input.length; i++) {
        if (output.has(input.charAt(i))) {
            output.set(input.charAt(i), output.get(input.charAt(i)) + 1);
        }
        else {
            output.set(input.charAt(i), 1);
        }
    }

    return output;
}

export default countChars;