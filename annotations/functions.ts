const add = (a: number, b: number): number => {
    return a + b
}

//the reason we add a type for return value even typescript can infer it is because we can get an error when we accidentally forget to return a value

function divide (a: number, b: number): number {
    return a / b 
}

const multiply = function(a: number, b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}
//we use void when we don't return any value 

const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message)
    }
}

const weatherToday = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({
    date, 
    weather
}: {
    date: Date;
    weather: string;
}) : void => {
    console.log(date)
    console.log(weather)
}

logWeather(weatherToday)