var remainingTickets = require("./remainingTickets");

function randomDuration(input) {
    return input.teamDurations[Math.floor(Math.random() * input.teamDurations.length)];
}

function reduceAllByOne(arr) {
    return arr.map(function(item) {
        return item - 1;
    })
    .filter(function(item) {
        return item > 0
    });
}

function shouldAdd(workingLength, wipLimit) {
    if (workingLength >= wipLimit) {
        return false;
    }
    return true;
    // var p = Math.random() <= ((wipLimit- workingLength) / wipLimit);
    // return p;
}

module.exports = function(input) {
    var remaining = remainingTickets(input);
    var working = [];
    var days = 0;
    var wipLimit = input.wipLimit || 5;

    while (remaining > 0 || working.length > 0) {
        days++;
        working = reduceAllByOne(working);
        while(remaining > 0 && shouldAdd(working.length, input.wipLimit)) {
            working.push(randomDuration(input) - 1); // -1 because we already work on the task when we pull it
            remaining--;
        }
    }

    return days;
};
