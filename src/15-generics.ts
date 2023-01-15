import { Dog } from './09-protected';

/* function getValue(value: unknown) {
  return value;
} */

/* function getValue(value: string | number) {
  return value;
} */

function getValue<t>(value: t) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12');
getValue<number[]>([11, 1, 1]);
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi);
