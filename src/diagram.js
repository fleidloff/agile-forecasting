var moment = require("moment");

var diagram2 = function(resultDays, input) {
	console.log(resultDays);
	console.log();
}

function expectedDate(workingDays, input) {
	return moment(input.startDate).add(workingDays*7/5, "days").format("YYYY-MM-DD")
}

var diagram = function(resultDays, input) {
	var total = 0;
	return Object.keys(resultDays)
		.sort()
		.map(function(item) {
			total += resultDays[item]
			return { workingDays: item, probability: Math.ceil(total / input.cycles * 100), date: expectedDate(item, input)};
		});
}

module.exports = diagram;
