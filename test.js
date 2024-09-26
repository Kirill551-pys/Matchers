import { sortHeroesByHealth } from './add.js';

describe('sortHeroesByHealth', () => {
  it('следует отсортировать героев по состоянию здоровья в порядке убывания', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    expect(sortHeroesByHealth(heroes)).toEqual(expected);
  });

  it('должен возвращать пустой массив для пустых входных данных', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  it('должно выдаваться сообщение об ошибке при вводе данных, отличных от массива', () => {
    expect(() => sortHeroesByHealth('не массив')).toThrowError();
  });
});