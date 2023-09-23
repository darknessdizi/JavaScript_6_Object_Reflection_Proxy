const { orderByProps } = require('./orderByProps.js');

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const arrayProperties = orderByProps(obj, ['name', 'level']);
console.log(arrayProperties);
