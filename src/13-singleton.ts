export class MyService {
  static instance: MyService | null = null;

  private constructor(public name: string) {}

  getName() {
    return this.name;
  }

  static create(name: string) {
    if(MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const MyService1 = MyService.create('service1');
console.log(MyService1.getName());

const MyService2 = MyService.create('service2');
console.log(MyService2.getName());

console.log(MyService1 === MyService2);
