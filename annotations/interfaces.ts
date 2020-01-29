const oldCivic = {
    name:'civic',
    year: 2000,
    broken: true, 
    summary(): string {
        return `Name: ${this.name}`
    }
}

// const printVehicle = (vehicle : {
//     name: string;
//     year: number;
//     broken: boolean
// }): void => {
//     console.log(`Name: ${vehicle.name}`)
//     console.log(`Year: ${vehicle.year}`)
//     console.log(`Broken? ${vehicle.broken}`)
// }

// printVehicle(oldCivic)

//right now the above annotation can get really long and hard to read. In this case we should implement the interface. 

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Reportable {
    summary(): string;
}

const printSummary = (item : Reportable ): void => {
        console.log(item.summary())
    }
    
printSummary(oldCivic)

const drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar in it.`
    }
}

printSummary(drink1)

//general strategy for reusable code in TS
//1. create functions that accept arguments that are typed with interfaces
//2. objects/classes can decide to 'implement' a given interface to work with a function