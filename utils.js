var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * 判断当前年份是否闰年
 * @param {Number} year 年份
 * @return {boolean}
 */
function isLeapYear(date) {
    var year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * 获取本月有多少天数
 * @param {Date}
 * @return {Number} 本月天数
 */
function getDaysInMonth(date) {
    var m = date.getMonth();
    return m == 1 && isLeapYear(date) ? 29 : daysInMonth[m];
}

/**
 * 获取本月第一天
 * @param {Date} date The date
 * @return {Date}
 */
function getFirstDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * 获取本月最后一天
 * @param {Date} date The date
 * @return {Date}
 */
function getLastDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), getDaysInMonth(date));
}

module.exports = {
    isLeapYear: isLeapYear,
    getDaysInMonth: getDaysInMonth,
    getFirstDateOfMonth: getFirstDateOfMonth,
    getLastDateOfMonth: getLastDateOfMonth
};
