
//view 
   //tree
  //flat
//organiZe
//help

let input = process.argv.slice(2);
let view = require("./commands/view");
let organize = require("./commands/organize");
let help = require("./commands/help");
let cmd = input[0];
console.log(input[0]);
switch(cmd){
    case "view":
        view.viewHelper();
        // console.log("view command implemented");
    break;
    case "organize": 
    organize.organizeHelper();
    // console.log("Organize command implemented");
    break;
    case "help":
        help.helpHelper();
   //console.log("help command implemented");
        break;
        default:
    console.log("Wrong command:(");
}


