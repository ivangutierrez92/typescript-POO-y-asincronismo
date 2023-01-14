export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const cheis = new Dog('cheis', 'nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);
