//enum: enumeration
//when to use enums
//1. follow near-identical syntax rules as normal objects
//2. creates an object with the same keys and values when converted from TS to JS
//3. primary goal is to signal to other engineers that these are all closely related values
//4. use whenever we have a small fixed set of values that are all closely related and known at compile time

// const MatchResult = {
//     HomeWin: 'H',
//     AwayWin: 'A',
//     Draw: 'D'
// }
export enum MatchResult  {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}