'use strict';

import Ship from "./ship";
import Pirate from "./pirate";

let myPirateShip = new Ship();

myPirateShip.addPirate(new Pirate('Jack', 100, true, false));
myPirateShip.addPirate(new Pirate('BlackBeard', 100, true, false));
myPirateShip.addPirate(new Pirate('Maria', 50, false, true));
myPirateShip.addPirate(new Pirate('Bob', 5, false, true));
myPirateShip.addPirate(new Pirate('Snake-eyes', 10, false, true));
myPirateShip.addPirate(new Pirate('Billy Bones', 5, false, false));
myPirateShip.addPirate(new Pirate('Anne', 75, false, false));

for (let pirate of myPirateShip.getPirates()){
    pirate.party();
    pirate.work();
    console.log(pirate.toString());
}

myPirateShip.lastDayOnTheShip();
myPirateShip.prepareForBattle();
console.log(myPirateShip.getGold());
console.log(myPirateShip.getPirates());
console.log(myPirateShip.getPoorPirates())