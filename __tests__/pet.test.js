const Pet = require('../src/pet')

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Kanye')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Biggie')
      expect(pet.name).toEqual('Biggie')
    })
    it('sets the age property to 0', () => {
      const pet = new Pet('Tupac')
      expect(pet.age).toEqual(0)
    })
    it('sets the hunger property to 0', () => {
      const pet = new Pet('Andre3000')
      expect(pet.hunger).toEqual(0)
    })
    it('sets the fitness property to 10', () => {
      const pet = new Pet('BigBoi')
      expect(pet.fitness).toEqual(10)
    })
  });

describe('growUp', () => {
  it('adds 1 to the age property', () => {
    const pet = new Pet('Eminem')
    pet.growUp()
    expect(pet.age).toEqual(1)
  })
  it('increases the hunger property by 5', () => {
    const pet = new Pet('50Cent')
    pet.growUp()
    expect(pet.hunger).toEqual(5)
  })
  it('decreases the fitness property by 3', () => {
    const pet = new Pet('Kendrick')
    pet.growUp()
    expect(pet.fitness).toEqual(7)
  })
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Snoop')
    pet.age = 36
    expect(pet.growUp).toThrow("You murdered your pet in cold blood. Very not cool.")
  })
})

describe('walk', () => {
  it('increases the Pet\'s fitness level by 4', () => {
    const pet = new Pet('Gambino')
    pet.fitness = 4
    pet.walk()
    expect(pet.fitness).toEqual(8)
  })
  it('increases fitness to a maximum of 10', () => {
    const pet = new Pet('Drake')
    pet.fitness = 8
    pet.walk()
    expect(pet.fitness).toEqual(10)
  })
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('IceCube')
    pet.fitness = -6
    expect(pet.walk).toThrow("You murdered your pet in cold blood. Very not cool.")
  })
})

describe('feed', () => {
  it ('decreases the Pet\'s hunger level by 3', () => {
    const pet = new Pet('Pusha')
    pet.hunger = 6
    pet.feed()
    expect(pet.hunger).toEqual(3)
  })
  it ('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Dre')
    pet.hunger = 2
    pet.feed()
    expect(pet.hunger).toEqual(0)
  })
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Lupe')
    pet.hunger = 16
    expect(pet.feed).toThrow("You murdered your pet in cold blood. Very not cool.")
  })
})

describe('checkUp', () => {
  it('tells the user their pet is dead if their pet is dead', () => {
    const pet = new Pet('Skepta')
    pet.age = 36
    pet.fitness = 6

  })
  it ('tells the user to take the pet for a walk if its fitness level is less than 3', () => {
    const pet = new Pet('Nas')
    pet.fitness = 2
    pet.checkUp()
    expect(pet.checkUp()).toEqual(expect.stringContaining("Take me for a walk you lazy cunt."))
  })
  it ('tells the user to take the pet for a walk if its fitness level is equal to 3', () => {
    const pet = new Pet('Stormzy')
    pet.fitness = 3
    pet.checkUp()
    expect(pet.checkUp()).toEqual(expect.stringContaining("Take me for a walk you lazy cunt."))
  })
  it ('tells the user to feed the pet if its hunger level is more than 5', () => {
    const pet = new Pet('FortMinor')
    pet.hunger = 6
    pet.checkUp()
    expect(pet.checkUp()).toEqual(expect.stringContaining("I'm starving you useless cunt."))
  })
  it ('tells the user to feed the pet if its hunger level is equal to 5', () => {
    const pet = new Pet('FortMinor')
    pet.hunger = 5
    pet.checkUp()
    expect(pet.checkUp()).toEqual(expect.stringContaining("I'm starving you useless cunt."))
  })
  it ('tells the user to feed and walk the pet if its fitness or hunger are too low' , () => {
    const pet = new Pet('BDolan')
    pet.fitness = 3
    pet.hunger = 5
    expect(pet.checkUp()).toEqual(expect.stringContaining("Feed me, then take me for a walk before I call the RSPCA, you animal cruelty fuck."))
  })
  it ('tells the user their pet is happy and healthy if its fitness and hunger levels are high enough', () => {
    const pet = new Pet('POS')
    pet.fitness = 10
    pet.hunger = 0
    expect(pet.checkUp()).toEqual(expect.stringContaining("Somehow, I'm actually alive and relatively happy. Go you."))
  })
})

describe('isAlive', () => {
  it ('checks to see if the pet is alive when it should be', () => {
    const pet = new Pet('Scroobius')
    pet.fitness = 2
    pet.hunger = 9
    pet.age = 12
    expect(pet.isAlive).toEqual(true)
  })
  it ('checks to see if the pet is dead when it should be', () => {
    const pet = new Pet('SageFrancis')
    pet.fitness = 0
    pet.hunger = 10
    pet.age = 30
  })
})