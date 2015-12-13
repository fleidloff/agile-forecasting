var shapecube = require("shapecube");

const input = {
    wipLimit: 5,
    addedScope: 4,
    nrTasks: 12,
    ticketsPerTask: 7,
    taskTimes: [1,2,1,1,6,7,4,1,3]
};

const input = {
    tasks: [
        {
            name: "ms1",
            expectedTickets: 7,
            durations: [1,2,1,1,6,7,4,1,3]
        },
        {
            name: "ms2",
            expectedTickets: 5
        }
    ],
    unspecifiedTasks: 7,
    wipLimit: 5,
    teamDurations: [1,2,1,1,6,7,4,1,3,1,2,1,1,6,7,4,1,3]
}