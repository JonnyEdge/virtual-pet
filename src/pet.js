const MAXIMUM_FITNESS = 10
const MINIMUM_HUNGER = 0

function Pet (name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0
    }
}

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error("You murdered your pet in cold blood. Very not cool.")
    }
    this.age += 1
    this.hunger += 5
    this.fitness -= 3 
}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error("You murdered your pet in cold blood. Very not cool.")
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness += 4
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
}

Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error("You murdered your pet in cold blood. Very not cool.")
    }
    if ((this.hunger) - 3 > MINIMUM_HUNGER) {
        this.hunger -= 3
    } else {
        this.hunger = MINIMUM_HUNGER
    }
}

Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        return "I'm sorry to be the bearer of bad news, but your pet is dead. It's dead because you killed it."
    }
    if (((this.fitness) > 3) && ((this.hunger) < 5)) {
        return "Somehow, I'm actually alive and relatively happy. Go you."
    }
    if (((this.fitness) <= 3) && ((this.hunger) >= 5)) {
        return "Feed me, then take me for a walk before I call the RSPCA, you animal cruelty fuck."
    }
    if ((this.fitness) <= 3) {
        return "Take me for a walk you lazy cunt."
    }
    if ((this.hunger) >= 5) {
        return "I'm starving you useless cunt."
    }
}

module.exports = Pet