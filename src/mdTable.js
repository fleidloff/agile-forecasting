
var d = [ { workingDays: '25', probability: 1, date: '2015-02-08' },
  { workingDays: '34', probability: 2, date: '2015-02-20' },
  { workingDays: '36', probability: 3, date: '2015-02-23' } ]

var mdTable = function mdTable(diagram) {
	var body = diagram.sort(function(a, b) {
		return a.probability < b.probability ? 1 : a.probability > b.probability ? -1 : 0;
	})
	.map(function(item) {
		return "| " + item.probability + "% | " + item.workingDays + " | " + item.date + " | \n";
	});

	var header = "| Probability | woking days | expected date | \n| --- | --- | --- | \n";

	return header + body.join("");
};

module.exports = mdTable;
