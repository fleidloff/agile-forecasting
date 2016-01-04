var shapecube = require("shapecube");
var workingDays = require("./workingDays");
var diagram = require("./diagram");

// milestone > task > ticket

const input = {
    tasks: [
        {
            name: "ms1",
            expectedTickets: 5,
            actualTickets: 12
        },
        {
            name: "ms2",
            expectedTickets: 7,
            actualTickets: 12
        },
        {
            name: "ms3"
        }
    ],
    unspecifiedTasks: 7,

    wipLimit: 5,
    teamDurations: [1,2,1,1,6,7,4,1,3,1,2,1,1,6,7,4,1,3],

    startDate: "2016-01-04",
    cycles: 10000
};

var resultDays = {};

for(var i = 0; i < input.cycles; i++) {
    var wd = workingDays(input);
    if (!resultDays[wd]) {
        resultDays[wd] = 0;
    }
    resultDays[wd] += 1;
}

console.log(diagram(resultDays, input));
