'use strict';

import test = require ('tape');
import Pirate from './pirate';
import Ship from './ship';

test('testing Ship class constructor', (t: any) => {
    let testShip = new Ship();
    t.equals(testShip.getPirates().length, 0);
    t.equals(testShip.getCaptainExists(), false);
    t.end();
});
