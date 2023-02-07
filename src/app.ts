import { getRandomNum } from './libs/get-random';
import { roundDigits } from './libs/round-digits';
import { merge } from './libs/merge';
import { dotNotation } from './libs/dot-notation';

const random: number = getRandomNum(99, 999);
console.info('random value', random);

console.info('roundDigits', roundDigits(12.636, Number.NaN));

console.info('merge', merge({ a: 1 }, { b: 2 }));

const testObj: object = {
    foo: 'bar',
    state: {
        name: 'New York',
    },
    fruit: [
        {
            type: 'Apple',
            color: 'red',
            variety: [{ name: 'cox' }, { name: 'gala' }, { name: 'honeycrips' }],
        },
        {
            type: 'Mango',
            color: 'orange',
            variety: [{ name: 'alice' }, { name: 'alphonso' }],
        },
    ],
};

console.info('dotNotation.get', dotNotation.get(testObj, 'state.name'));

dotNotation.set(testObj, 'state.aaa', '123');
console.info('dotNotation.set', JSON.stringify(testObj, null, 2));
