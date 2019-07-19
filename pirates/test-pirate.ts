'use strict';

import test = require ('tape');
import Pirate from './pirate';

test('testing Pirate class constructor', (t: any) => {
    t.equals(new Pirate('', 100, false, false), undefined);
    t.equals(new Pirate('name', -1, false, false), undefined);
    let testPirate = new Pirate('Jack', 100, true, false);
    t.equals(testPirate.getName(), 'Jack');
    t.equals(testPirate.getGoldAmount(), 100);
    t.equals(testPirate.getCaptainProp(), true);
    t.equals(testPirate.getWoodenLegProp(), false);
    t.end();
});

