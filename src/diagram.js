var moment = require("moment");



function expectedDate(workingDays, input) {
	return moment(input.startDate).add(workingDays*7/5, "days").format("YYYY-MM-DD")
}

var diagram = function(resultDays, input) {
	var total = 0;
	var lastProbability = 0;
	return Object.keys(resultDays)
		.sort(function (a,b) {
		    return a - b;
		})
		.map(function(item) {
			total += resultDays[item]
			return { workingDays: item, probability: Math.ceil(total / input.cycles * 100), date: expectedDate(item, input)};
		})
		.filter(function(item) {
			var unique = lastProbability !== item.probability;
			lastProbability = item.probability;
			return unique;
		});
}

module.exports = diagram;
