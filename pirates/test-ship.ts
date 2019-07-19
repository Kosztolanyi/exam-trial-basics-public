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

test('testing Ship class addPirate method', (t: any) => {
    let testShip = new Ship();
    testShip.addPirate(new Pirate('', 100, false, false));
    t.equals(testShip.getPirates().length, 0);
    testShip.addPirate(new Pirate('name', -1, false, false));
    t.equals(testShip.getPirates().length, 0);
    testShip.addPirate(new Pirate('Jack', 100, true, false));
    t.equals(testShip.getPirates().length, 1);
    t.equals(testShip.getCaptainExists(), true);
    testShip.addPirate(new Pirate('BlackBeard', 100, true, false));
    t.equals(testShip.getPirates().length, 1);
    t.end();
});

