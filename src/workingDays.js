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

module.exports = function(input) {
    var remaining = remainingTickets(input);
    var working = [];
    var days = 0;
    var wipLimit = input.wipLimit || 5;

    while (remaining > 0 || working.length > 0) {
        days++;
        working = reduceAllByOne(working);
        while(working.length < wipLimit && remaining > 0) {
            working.push(randomDuration(input) - 1); // - 1 because you already work on that task
            remaining--;
        }
    }

    return days;
};
