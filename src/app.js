var shapecube = require("shapecube");
var workingDays = require("./workingDays");
var diagram = require("./diagram");
var mdTable = require("./mdTable");
var fs = require("fs");
var input;

try {
    input = require("../projects/" + process.argv[process.argv.length - 1])
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

var data = mdTable(diagram(resultDays, input));

fs.writeFile("./projects/" + process.argv[process.argv.length - 1] + ".md", data, { flags: 'wx' }, function (err) {
    if (err) throw err;
    console.log("It's saved!");
});

console.log(data);
