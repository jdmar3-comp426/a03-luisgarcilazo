import mpg_data from "./src/medium/data/mpg_data.js";
import { getMedian,getStatistics } from "./src/medium/medium_1.js";
import { allCarStats } from "./src/medium/medium_2.js";
import { searchByYear, searchName } from "./src/medium/medium_3.js";
import { sumToString } from "./src/mild/mild_1.js";
import { getIncreasingArray,countArray } from "./src/mild/mild_1.js";
import { maxAndMin } from "./src/mild/mild_1.js";
import { identifyArray, identifyVariable,removeKey,removeKeyNonDestructive } from "./src/mild/mild_2.js";
import { repeatDemo, tenTimes, tenTimesFifty, someEven, everyEven, filter, hasExactly,repeat } from "./src/spicy/spicy_9.js";

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
console.log(getMedian([3,2,5,6,2,7,4,2,7,5]))
console.log(getStatistics([3,2,4,5,5,5,2,6,7]))
console.log(allCarStats)
console.log(searchName(mpg_data,"kia"))
console.log(searchByYear(mpg_data,[2012]))
console.log(tenTimes(5));
console.log(tenTimesFifty());
console.log(someEven([4, 3, 2, 1, 0], x => x === 3));
console.log(someEven([1, 0, 1, 0, 1], x => x === 0));
console.log(someEven([1, 1, 1, 1, 0], x => x === 0));
console.log(someEven([0, 0, 0, 0, 0], x => x === 0));
console.log(everyEven([1, 5, 1, 0, 1], x => x === 1));
console.log(everyEven([1, 1, 0, 1, 1], x => x === 1)); 
console.log(filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
console.log(filter([1, 90, 5, 31], x => x % 2 === 1));
console.log(hasExactly(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y',2));
console.log(hasExactly([1, 90, 5, 31], x => x % 2 === 1, 3));
console.log(getMedian([3,2,5,6,2,7,4,2,7,5]));
console.log(searchName(mpg_data,"Limited"));
console.log(getMedian([14,8,5,7,7,5,2,7,5,3,47,9]));
repeat(console.log, 5, 'What up?');
repeatDemo();