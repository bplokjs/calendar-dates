var utils = require("./utils");

var getFirstDateOfMonth = utils.getFirstDateOfMonth;
var getLastDateOfMonth = utils.getLastDateOfMonth;

/**
 * 获取指定指定月份的日期范围
 * @param {Date}
 * @param {Number}  Set the first day of the week: Sunday is 0, Monday is 1, etc.
 * @returns {Array<startDate, endDate>}
 * */
module.exports = function getCalendarDateRange(date, firstDay) {
    firstDay = firstDay === undefined ? 0 : firstDay;

    var start = getFirstDateOfMonth(date),
        end = getLastDateOfMonth(date);

    var startDay = start.getDay();
    var startOffset =
        startDay >= firstDay ? startDay - firstDay : 7 - (firstDay - startDay);

    start.setDate(start.getDate() - startOffset);

    var endDay = end.getDay();
    var endOffset =
        firstDay <= endDay
            ? 7 - (endDay - firstDay + 1)
            : firstDay - endDay - 1;

    end.setDate(end.getDate() + endOffset);

    return [start, end];
};
