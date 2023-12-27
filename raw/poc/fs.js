//nodejs -> modules-> functionalities
//language-> logic
//nodejs 
let filesyst = require("fs");
let buffer = filesyst.readFileSync("abcd.txt", "");
console.log("buffer data", buffer);