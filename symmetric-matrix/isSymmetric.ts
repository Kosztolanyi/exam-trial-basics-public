'use strict';

const isSymmetric = (inputMatrix: number[][]): boolean => {
    if (inputMatrix == undefined) {
        console.log('please provide input matrix')
        return undefined;
    }
    else if (inputMatrix.length == 0) {
        console.log('please provide non-empty matrix')
        return undefined;
    }
    else {
        for (let i: number = 0; i < inputMatrix.length; i++) {
            if (inputMatrix.length != inputMatrix[i].length) {
                console.log('please provide symmetric matrix');
                return undefined;
            }
            else {
                for (let j: number = 0; j < inputMatrix[i].length; j++) {
                    if (inputMatrix[i][j] != inputMatrix[j][i]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}