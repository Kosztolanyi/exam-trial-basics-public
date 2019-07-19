'use strict';

import test = require('tape');
import readContent from './readContent';

test('testing invalid input error handling', (t: any) => {
    t.equals(readContent('testfile.txt'), 'testtesttest');
    t.equals(readContent('wrongfilename'), undefined);
    t.end();
});
