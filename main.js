import { getMedian,getStatistics } from "./src/medium/medium_1.js";
import { sumToString } from "./src/mild/mild_1.js";
import { getIncreasingArray,countArray } from "./src/mild/mild_1.js";
import { maxAndMin } from "./src/mild/mild_1.js";
import { identifyArray, identifyVariable,removeKey,removeKeyNonDestructive } from "./src/mild/mild_2.js";

console.log(maxAndMin([1,2,3,-3,5,6,100,90,1880,2]));
let obj1 = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
}
let obj = removeKeyNonDestructive(obj1, 'password');
console.log(obj1)
console.log(obj);
console.log(getMedian([1,2,3,4,5,6]))
console.log(getStatistics([3,2,4,5,5,5,2,6,7]))