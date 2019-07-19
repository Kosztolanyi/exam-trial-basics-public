'use strict';

import test = require('tape');
import isSymmetric from './isSymmetric';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(isSymmetric(testInput), undefined);
    t.equals(isSymmetric([]), undefined);
    t.equals(isSymmetric([[2, 3], [4, 5, 6]]), undefined);
    t.end();
});

test('testing main logic', (t: any) => {
    t.equals(isSymmetric([[1, 0, 1], [0, 2, 2], [1, 2, 5]]), true);
    t.equals(isSymmetric([[7, 7, 7], [6, 5, 7], [1, 2, 1]]), false);
    t.equals(isSymmetric([[1, 0], [0, 1]]), true);
    t.equals(isSymmetric([[1, 2, 3, 4], [2, 1, 2, 3], [3, 2, 1, 2], [4, 3, 2, 1]]), true);
    t.end();
});