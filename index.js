var getCalendarDateRange = require("./getCalendarDateRange");
var ms1d = 864e5; // milliseconds in a day
/**
 *
 *
 * @param {Date} date
 * @param {Object} options
 * @param {Number} options.firstDay
 * @param {Boolean} options.matrix
 * @param {Number} options.totalDays 为0时代表自动适配
 *
 * @returns {Array}
 */
module.exports = function calendarDates(date, options) {
    date = date === undefined ? new Date() : date;
    options = options === undefined ? {} : options;
    var matrix = options.matrix;
    var month = date.getMonth();
    var dateTime = date.getTime();
    var totalDays = options.totalDays;

    var dateRange = getCalendarDateRange(date, options.firstDay);

    var startDate = dateRange[0];
    var endDate = dateRange[1];
    var len =
        totalDays ||
        Math.round((endDate.getTime() - startDate.getTime()) / ms1d) + 1;

    var results = [];
    var matrixRow = [];
    var daysInWeek = 7;

    for (var i = 0; i < len; i++) {
        var currentDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate() + i
        );
        var currentMonth = currentDate.getMonth();
        var isCurrent = month === currentMonth;
        var isPrevious =
            month !== currentMonth && dateTime > currentDate.getTime();
        // var isNext = month !== currentMonth && dateTime < currentDate.getTime();

        var current = {
            type: isCurrent ? "current" : isPrevious ? "previous" : "next",
            date: currentDate
        };

        if (matrix) {
            if (i % daysInWeek === 0) {
                matrixRow = [];
            }

            matrixRow.push(current);

            if (i % daysInWeek === 6 || i === len - 1) {
                results.push(matrixRow);
            }
        } else {
            results.push(current);
        }
    }

    return results;
};
