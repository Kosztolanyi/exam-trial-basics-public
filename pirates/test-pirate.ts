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

test('testing Pirate work method', (t: any) => {
    let testPirate = new Pirate('Jack', 100, true, false);
    testPirate.work();
    t.equals(testPirate.getGoldAmount(), 110);
    t.equals(testPirate.getHealthPoints(), 5);
    let testPirate2 = new Pirate('Maria', 50, false, true);
    testPirate2.work();
    t.equals(testPirate2.getGoldAmount(), 51);
    t.equals(testPirate2.getHealthPoints(), 9);
    t.end();
});

test('testing Pirate party method', (t: any) => {
    let testPirate = new Pirate('Jack', 100, true, false);
    testPirate.party();
    t.equals(testPirate.getHealthPoints(), 20);
    let testPirate2 = new Pirate('Maria', 50, false, true);
    testPirate2.party();
    t.equals(testPirate2.getHealthPoints(), 11);
    t.end();
});

test('testing Pirate toString method', (t: any) => {
    let testPirate = new Pirate('Jack', 100, true, false);
    t.equals(testPirate.toString(), '- Hello, I\'m Jack. I still have my real legs and 100 gold.');
    let testPirate2 = new Pirate('Maria', 50, false, true);
    t.equals(testPirate2.toString(), '- Hello, I\'m Maria. I have a wooden leg and 50 gold.');
    t.end();
});


