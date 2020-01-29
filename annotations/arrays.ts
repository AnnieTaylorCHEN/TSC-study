const carMakers = ['ford', 'toyota', 'chevy']
//note we can initialize an empty array with certain value such as const carMakers: string[] =[]

const dates = [new Date(), new Date()]

const carsByMake : string[][]= []

//help with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop()

//prevent incompatible values
carMakers.push('benz')
//you can't push a number here for example

//help us with map and autocompletion of suggested methods
carMakers.map((car: string) :string => {
    return car.toUpperCase()
})

//flexible types
const importantDates : (Date | string)[] = [new Date()]

importantDates.push('2020-02-01')
importantDates.push(new Date())

//where to use typed arrays
//any time we need to represent a collection of records with some arbitrary sort order