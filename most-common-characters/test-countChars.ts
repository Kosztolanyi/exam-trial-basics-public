'use strict';

import test = require('tape');
import countChars from './countChars';

test('testing character counter', (t: any) => {
    let testString: string = 'cababb';
    t.equals(countChars(testString).get('a'), 2);
    t.equals(countChars(testString).get('b'), 3);
    t.equals(countChars(testString).get('c'), 1);
    t.equals(countChars(undefined), undefined);
    t.end();
});
