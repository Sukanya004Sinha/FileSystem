let input = process.argv.slice(2);
console.log(input);
let arr =[
    1,
    1.1,
    true,
    function sayHi() {
        console.log("function inside an array");
        return "val returned from a array";
    },
    null,
    [1,2,3,4,5,6]
];
let slicedArr= arr.slice(2,5);
console.log("sliced Arr:", slicedArr);
console.log("orignalArr:", arr);
//splice starting index, delete counnt 
let deleteElem = arr.splice(2,3);
console.log("del Elem Arr", deleteElem);
console.log("orignal Arr:", arr);
