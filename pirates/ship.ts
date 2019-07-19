'use strict';

import Pirate from "./pirate";

export default class Ship {
    private pirates: Pirate[];
    private hasCaptain: boolean;

    constructor() {
        this.pirates = [];
        this.hasCaptain = false;
    }

    addPirate(input: Pirate) {
        if (JSON.stringify(input) == '{}'){
            console.log('Cannot add: invalid pirate input!');
        }
        else if (input.getCaptainProp() && this.hasCaptain) {
            console.log('Ship already has a captain!');
        }
        else if (input.getCaptainProp()) {
            this.pirates.push(input);
            this.hasCaptain = true;
        }
        else {
            this.pirates.push(input);
        }
    }

    getPirates(): Pirate[] {
        return this.pirates;
    }

    getCaptainExists(): boolean {
        return this.hasCaptain;
    }

    getPoorPirates(): string[] {
        let output: string[] = [];
        this.pirates.forEach(value => {
            if (value.getWoodenLegProp() && value.getGoldAmount() < 15) {
                output.push(value.getName());
            }
        })
        return output;
    }

    getGold(): number {
        let output: number = 0;
        this.pirates.forEach(value => output += value.getGoldAmount());
        return output;
    }

    lastDayOnTheShip() {
        this.pirates.forEach(value => value.party());
    }

    prepareForBattle() {
        this.pirates.forEach(value => {
            for (let i: number = 0; i < 5; i++) {
                value.work()
            }
        });
        this.lastDayOnTheShip();
    }

}