class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])

//Examples of generics with functions
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(['a', 'b', 'c'])

//generic constraints
class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHouseOrCars<House>([new House(), new House()])
printHouseOrCars<Car>([new Car(), new Car()])
