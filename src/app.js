var shapecube = require("shapecube");

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

// todo: check input

// x = actual tickets / expected tickets
function ticketFactor(input) {
    var completedTasks = input.tasks
        .filter(function(task) {
            return (typeof task.actualTickets !== "undefined");
        });

    var ticketFactor = completedTasks.map(function(task) {
            return task.actualTickets / task.expectedTickets;
        })
        .reduce(function(pv, cv, index) {
            return pv + cv;
        }, 0) / completedTasks.length;

    return ticketFactor;
}

var _ticketFactor = ticketFactor(input)

function remainingTickets(input, ticketFactor) {
    var remainingTasks = input.tasks
        .filter(function(task) {
            return (typeof task.actualTickets === "undefined");
        });

    // todo: take into consideration: expected tickets!
    var tickets = (remainingTasks.length + input.unspecifiedTasks) * ticketFactor;

    return Math.ceil(tickets);
}

var _remainingTickets = remainingTickets(input, _ticketFactor);

console.log(_remainingTickets);