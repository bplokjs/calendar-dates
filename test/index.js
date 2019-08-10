const assert = require("assert");
const getCalendarDateRange = require("../getCalendarDateRange");
const calendarDates = require("../");

const tests = [
    {
        firstDay: 0,
        date: new Date(2012, 1),
        eq: [new Date(2012, 0, 29), new Date(2012, 2, 3)]
    },
    {
        firstDay: 0,
        date: new Date(2012, 2),
        eq: [new Date(2012, 1, 26), new Date(2012, 2, 31)]
    },
    {
        firstDay: 0,
        date: new Date(2012, 3),
        eq: [new Date(2012, 3, 1), new Date(2012, 4, 5)]
    },
    {
        firstDay: 1,
        date: new Date(2000, 1),
        eq: [new Date(2000, 0, 31), new Date(2000, 2, 5)]
    },
    {
        firstDay: 1,
        date: new Date(1999, 1),
        eq: [new Date(1999, 1, 1), new Date(1999, 1, 28)]
    },
    {
        firstDay: 1,
        date: new Date(2019, 5),
        eq: [new Date(2019, 4, 27), new Date(2019, 5, 30)]
    },
    {
        firstDay: 1,
        date: new Date(2019, 6),
        eq: [new Date(2019, 6, 1), new Date(2019, 7, 4)]
    },
    {
        firstDay: 5,
        date: new Date(2019, 7),
        eq: [new Date(2019, 6, 26), new Date(2019, 8, 5)]
    },
    {
        firstDay: 5,
        date: new Date(2011, 1),
        eq: [new Date(2011, 0, 28), new Date(2011, 2, 3)]
    },
    {
        firstDay: 5,
        date: new Date(2018, 11),
        eq: [new Date(2018, 10, 30), new Date(2019, 0, 3)]
    },
    {
        firstDay: 5,
        date: new Date(2018, 9),
        eq: [new Date(2018, 8, 28), new Date(2018, 10, 1)]
    }
];

console.log("getCalendarDateRange");
tests.forEach(item => {
    const ret = getCalendarDateRange(item.date, item.firstDay);
    assert.deepEqual(ret, item.eq);
});

{
    //2019.08
    console.log("2019.08 0");
    const results = calendarDates(new Date(2019, 7), { firstDay: 1 });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 8, 1));
    assert.equal(end.type, "next");

    assert.equal(len, 35);
}

{
    //2019.08
    console.log("2019.08 42");
    const results = calendarDates(new Date(2019, 7), {
        firstDay: 1,
        totalDays: 42
    });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 8, 8));
    assert.equal(end.type, "next");

    assert.equal(len, 42);
}

{
    //2019.04
    console.log("2019.04 0");
    const results = calendarDates(new Date(2019, 3), { firstDay: 1 });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2019, 3, 1));
    assert.equal(start.type, "current");

    assert.deepEqual(end.date, new Date(2019, 4, 5));
    assert.equal(end.type, "next");

    assert.equal(len, 35);
}

{
    //2019.04
    console.log("2019.04 42");
    const results = calendarDates(new Date(2019, 3), {
        firstDay: 1,
        totalDays: 42
    });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2019, 3, 1));
    assert.equal(start.type, "current");

    assert.deepEqual(end.date, new Date(2019, 4, 12));
    assert.equal(end.type, "next");

    assert.equal(len, 42);
}

{
    //2019.09
    console.log("2019.09 0");
    const results = calendarDates(new Date(2019, 8), {
        firstDay: 1,
        totalDays: 42
    });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2019, 7, 26));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 9, 6));
    assert.equal(end.type, "next");

    assert.equal(len, 42);
}

{
    //2010.02
    console.log("2010.02 0");
    const results = calendarDates(new Date(2010, 1), { firstDay: 1 });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2010, 1, 1));
    assert.equal(start.type, "current");

    assert.deepEqual(end.date, new Date(2010, 1, 28));
    assert.equal(end.type, "current");

    assert.equal(len, 28);
}

{
    //2010.02
    console.log("2010.02 42");
    const results = calendarDates(new Date(2010, 1), {
        firstDay: 1,
        totalDays: 42
    });
    var len = results.length;
    var start = results[0];
    var end = results[len - 1];

    assert.deepEqual(start.date, new Date(2010, 1, 1));
    assert.equal(start.type, "current");

    assert.deepEqual(end.date, new Date(2010, 2, 14));
    assert.equal(end.type, "next");

    assert.equal(len, 42);
}

{
    //2010.02
    console.log("2010.02 42 matrix");
    const results = calendarDates(new Date(2010, 1), {
        matrix: true,
        firstDay: 1,
        totalDays: 42
    });
    var len = results.length;
    var start = results[0][0];
    var end = results[len - 1];
    end = end[end.length - 1];

    assert.deepEqual(start.date, new Date(2010, 1, 1));
    assert.equal(start.type, "current");

    assert.deepEqual(end.date, new Date(2010, 2, 14));
    assert.equal(end.type, "next");

    assert.equal(len, 6);
}

{
    //2010.02
    console.log("2019.08 1 matrix");
    const results = calendarDates(new Date(2019, 7), {
        matrix: true,
        firstDay: 1,
        totalDays: 1
    });
    var len = results.length;
    var start = results[0][0];
    var end = results[len - 1];
    end = end[end.length - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 6, 29));
    assert.equal(end.type, "previous");

    assert.equal(len, 1);
}

{
    //2010.02
    console.log("2019.08 8 matrix");
    const results = calendarDates(new Date(2019, 7), {
        matrix: true,
        firstDay: 1,
        totalDays: 8
    });
    var len = results.length;
    var start = results[0][0];
    var end = results[len - 1];
    end = end[end.length - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 7, 5));
    assert.equal(end.type, "current");

    assert.equal(len, 2);
}

{
    //2010.02
    console.log("2019.08 17 matrix");
    const results = calendarDates(new Date(2019, 7), {
        matrix: true,
        firstDay: 1,
        totalDays: 17
    });
    var len = results.length;
    var start = results[0][0];
    var end = results[len - 1];
    end = end[end.length - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 7, 14));
    assert.equal(end.type, "current");

    assert.equal(len, 3);
}

{
    //2010.02
    console.log("2019.08 35 matrix");
    const results = calendarDates(new Date(2019, 7), {
        matrix: true,
        firstDay: 1,
        totalDays: 35
    });
    var len = results.length;
    var start = results[0][0];
    var end = results[len - 1];
    end = end[end.length - 1];

    assert.deepEqual(start.date, new Date(2019, 6, 29));
    assert.equal(start.type, "previous");

    assert.deepEqual(end.date, new Date(2019, 8, 1));
    assert.equal(end.type, "next");

    assert.equal(len, 5);
}
