function loadingBar(num) {
    const percentageLoad = num / 10;
    const dotsLoad = 10 - percentageLoad;
    function percentLoaded() {
        const percents = '%'.repeat(percentageLoad);
        const dots = '.'.repeat(dotsLoad);
        const bar = `[${percents}${dots}]`
        return bar;
    }
    const resultBar = percentLoaded(num);

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`${resultBar}`);
    } else {
        console.log(`${num}% ${resultBar}`);
        console.log('Still loading...');
    }
}

loadingBar(50)