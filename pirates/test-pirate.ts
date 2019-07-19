'use strict';

import test = require ('tape');
import Pirate from './pirate';

test('testing Pirate class constructor', (t: any) => {
    t.equals(JSON.stringify(new Pirate('', 100, false, false)), '{}');
    t.equals(JSON.stringify(new Pirate('name', -1, false, false)), '{}');
    let testPirate = new Pirate('Jack', 100, true, false);
    t.equals(testPirate.getName(), 'Jack');
    t.equals(testPirate.getGoldAmount(), 100);
    t.equals(testPirate.getCaptainProp(), true);
    t.equals(testPirate.getWoodenLegProp(), false);
    t.equals(testPirate.getHealthPoints(), 10);
    t.end();
});

