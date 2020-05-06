async function* asyncGenerator(end) {
    let i = 0;
    while (i < end) {
        yield i++;
    }
}

const delay = (timeMs) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeMs);
    })
}

(async function () {
    for await (let num of asyncGenerator(10)) {
        console.log(num);
        await delay(2000);
    }
})();