// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex:number): boolean;
//     swap(leftIndex: number, rightIndex: number ): void;
// }

export abstract class Sorter {

    abstract compare(leftIndex: number, rightIndex:number): boolean
    abstract swap(leftIndex: number, rightIndex:number): void
    abstract length: number 

    sort(): void {
        const { length } = this

        for (let i = 0; i < length; i++){
            for (let j = 0; j < length - i -1; j++){

                    if (this.compare(j, j+1)){
                        this.swap(j, j +1)
                    }
                }
            }
        }

    }


//Difference between interface and abstract class
//interfaces:
//1. sets up a contract between different classes
//2. use when we have very different objects that we want to work together
//3. promotes loose coupling 

//inheritance/abstract classes
//1. sets up a contract between different classes
//2. use when we are trying to build up a definition of an object
//3. strongly couples classes together