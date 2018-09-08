const Pet = require('../src/pet')

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Phillip')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Phillip')
      expect(pet.name).toEqual('Phillip')
    })
    it('sets the age property to 0', () => {
      const pet = new Pet('Phillip')
      expect(pet.age).toEqual(0)
    })
  });
  