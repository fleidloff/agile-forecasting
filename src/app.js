var shapecube = require("shapecube");
var moment = require("moment");
var workingDays = require("./workingDays");

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

    startDate: "2016-01-04"
};

var resultDays = {};
for(var i = 0; i < 10000; i++) {
    var wd = workingDays(input);
    if (!resultDays[wd]) {
        resultDays[wd] = 0;
    }
    resultDays[wd] += 1;
}

// moment(input.startDate).add(67*7/5, "days").format("YYYY-MM-DD");

console.log(resultDays);
console.log(moment(input.startDate).add(Object.keys(resultDays)[0]*7/5, "days").format("YYYY-MM-DD"));
