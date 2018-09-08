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
})
  