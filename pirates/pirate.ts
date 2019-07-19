'use strict';

export default class Pirate {
    private name: string;
    private goldAmount: number;
    private healthPoints: number;
    private isCaptain: boolean;
    private hasWoodenLeg: boolean;

    constructor(name: string, gold: number, captain: boolean, woodenleg: boolean) {
        this.name = name;
        this.goldAmount = gold;
        this.healthPoints = 10;
        this.isCaptain = captain;
        this.hasWoodenLeg = woodenleg;
    }

    work() {
        if (this.isCaptain) {
            this.goldAmount += 10;
            this.healthPoints -= 5;
        }
        else {
            this.goldAmount++;
            this.healthPoints--;
        }
    }

    party() {
        if (this.isCaptain) {
            this.healthPoints += 10;
        }
        else {
            this.healthPoints++;
        }
    }

    toString(): string {
        if (this.hasWoodenLeg) {
            return `- Hello, I'm ${this.name}. I have a wooden leg and ${this.goldAmount} gold.`;
        }
        else {
            return `- Hello, I'm ${this.name}. I still have my real legs and ${this.goldAmount} gold.`;
        }
    }
}