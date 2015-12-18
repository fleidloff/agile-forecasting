var shapecube = require("shapecube");
var workingDays = require("./workingDays");

// milestone > task > ticket

const input = {
    tasks: [
        {
            name: "ms1",
            expectedTickets: 7,
            actualTickets: 12
        },
        {
            name: "ms2",
            expectedTickets: 5,
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


for(var i = 0; i < 10000; i++) {
    console.log(workingDays(input));
}
