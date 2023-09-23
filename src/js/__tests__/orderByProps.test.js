import orderByProps from '../orderByProps.js';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Получение отсортированного списка', () => {
  const arrayProperties = orderByProps(obj, ['name', 'level']);
  expect(arrayProperties).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Передано не существующее свойство', () => {
  expect(() => orderByProps(obj, ['name', 'skill'])).toThrow();
});
