var remainingTickets = require("./remainingTickets");

function randomDuration(input) {
    return input.teamDurations[Math.floor(Math.random() * input.teamDurations.length)]
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

    while (remaining > 0 || working > 0) {
        days++;
        working = reduceAllByOne(working);
        while(working.length < 5 && remaining > 0) {
            working.push(randomDuration(input));
            remaining--;
        }   
    }

    return days;
};
