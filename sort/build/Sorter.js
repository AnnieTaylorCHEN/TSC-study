"use strict";
// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex:number): boolean;
//     swap(leftIndex: number, rightIndex: number ): void;
// }
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//Difference between interface and abstract class
//interfaces:
//1. sets up a contract between different classes
//2. use when we have very different objects that we want to work together
//3. promotes loose coupling 
//inheritance/abstract classes
//1. sets up a contract between different classes
//2. use when we are trying to build up a definition of an object
//3. strongly couples classes together
