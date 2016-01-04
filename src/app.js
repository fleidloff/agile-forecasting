var shapecube = require("shapecube");
var workingDays = require("./workingDays");
var diagram = require("./diagram");
var input;

try {
    input = require("../" + process.argv[process.argv.length - 1])
} catch(err) {
    console.error("please provide a valid input json file as 1st parameter.");
    process.exit();
}


var resultDays = {};

for(var i = 0; i < input.cycles; i++) {
    var wd = workingDays(input);
    if (!resultDays[wd]) {
        resultDays[wd] = 0;
    }
    resultDays[wd] += 1;
}

console.log(diagram(resultDays, input));
