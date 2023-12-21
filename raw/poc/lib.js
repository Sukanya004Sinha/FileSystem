function myfun() {
    console.log("I am function inside lib");
    return private();
}
let a = 20;
function private() {
    return Math.random();
}

module.exports={
    fn: myfun,
    varName: a
}