const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// const pepsi: [string, boolean, number ] = ['brown', true, 40 ]

//type alias
type Drink = [string, boolean, number]

const pepsi: Drink =['brown', true, 40]
const sprite: Drink =['clear', true, 40]
const tea: Drink = ['brown', false, 0]

//basically in real life we often use object to represent the data as we have a key and know what they exactly are. 