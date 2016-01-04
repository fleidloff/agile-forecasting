
function completedTasks(input) {
    return input.tasks
        .filter(function(task) {
            return (typeof task.actualTickets !== "undefined");
        });
}

function remainingTasks(input) {
    return input.tasks
        .filter(function(task) {
            return (typeof task.actualTickets === "undefined");
        });
}

// x = actual tickets / expected tickets
function ticketFactor(completedTasks) {
    return completedTasks.map(function(task) {
            return task.actualTickets / (task.expectedTickets || 1);
        })
        .reduce(function(pv, cv) {
            return pv + cv;
        }, 0) / completedTasks.length;
}

function expectedTicketsPerTask(completedTasks) {
    return completedTasks.map(function(task) {
            return task.expectedTickets;
        })
        .reduce(function(pv, cv) {
            return pv + cv;
        }, 0) / completedTasks.length;
}

function remainingTickets(input, ticketFactor, expectedTicketsPerTask) {
    var expectedTicketsRemainigTasks = input.tasks
        .filter(function(task) {
            return (typeof task.expectedTickets !== "undefined");
        })
        .map(function(task) {
            return task.expectedTickets * ticketFactor;
        })
        .reduce(function(pv, cv) {
            return pv + cv;
        }, 0);

    var unspecifiedTasks = input.tasks
        .filter(function(task) {
            return (typeof task.expectedTickets === "undefined");
        }).length + input.unspecifiedTasks;

    var tickets = expectedTicketsRemainigTasks + (unspecifiedTasks * expectedTicketsPerTask * ticketFactor);

    return Math.ceil(tickets);
}

module.exports = function(input) {
    return remainingTickets(input, ticketFactor(completedTasks(input)), expectedTicketsPerTask(completedTasks(input)));
};
