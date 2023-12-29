let fs = require("fs");
let path = require("path");

function isFileOrNot(src){
return fs.lstatSync(src).isFile();
}
function readContent(src){
    return fs.readdirSync(src)

}
function viewFlat(src) {
   // console.log(src);
   let isFile = isFileOrNot(src);
   if(isFile==true){
    console.log(src + "*");
   }
   else{
   console.log(src);
   let fDirnames= readContent(src);
   console.log(fDirnames);
   //recursion call
   for(let i=0;i<fDirnames.length;i++){
    let child= fDirnames[i];
    let dirNamepath = path.join(src,child);
    //let dirNamepath = src+"\\"+child;
    viewFlat(dirNamepath)
   }
   }
}

let input = (process.argv.slice(2));

viewFlat(input[0]);