'use strict';

import test from 'tape';
import isSymmetric from './isSymmetric';

test('testing invalid input error handling', (t: any) => {
    let testInput: number[][];
    t.equals(isSymmetric(testInput), undefined);
    t.equals(isSymmetric([]), undefined);
    t.equals(isSymmetric([[2, 3], [4, 5, 6]]), undefined);
    t.end();
});