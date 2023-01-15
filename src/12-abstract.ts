export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
  }

  move() {
    console.log('moving as a dog');
    super.move();
  }
}

const cheis = new Dog('cheis', 'nico');
console.log(cheis.greeting());
cheis.woof(2);
