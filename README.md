# bplokjs-calendar-dates

获取指定月份天数

## install & useage

`npm install --save "bplokjs-calendar-dates`

`calendarDates(date, options)`

```
import calendarDates from './bplokjs-calendar-dates';

const dates = calendarDates(new Date(), {
    firstDay: 0
});

console.log(dates[0]);

{
    type: "previous",
    date: [Date Object]
}

```

## options

### firstDay

`Number` 默认：0

指定[0(周末)-6(周六)]作为一周的开始

### totalDays

`Number` 默认：0

指定返回日期数，默认情况下自动适配，负数返回空数组，大于 0 则返回指定数量的日期数组

### matrix

`Boolean` 默认：false

矩阵形式返回
eg:

```
[
    [{type:'current', date: Date}, ...6],
    [...]
]
```

## 返回格式

```
type DateItem = {
    type: 'previous' | 'current' | 'next',
    date: Date
}

matrix: false
[DateItem,...]

matrix: true
[
    [DateItem, ...]
]
```
