class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => {
      return max >= item ? max : item;
    });
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(5, 8, 2, 2, 2, -5, 4, -36));
