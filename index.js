const express = require('express');
const app = express();

let requestCount = 0;

app.get('/test', (req, res) => {
    const requestNr = requestCount;
    requestCount++;

    if (requestCount % 10 === 0) {
        console.log('requests:', requestCount);
    }

    // simulate some work for 200ms
    const memory = [];
    const startTime = new Date().getTime();
    const intervalId = setInterval(() => {
        if (new Date().getTime() > startTime + 200) {
            clearInterval(intervalId);
            res.send(`Completed #${requestNr}`);
        }

        // Perform a slightly CPU-intensive calculation
        let result = 0;
        for (let i = 0; i < 100000; i++) {
            result += Math.sqrt(i) * Math.sin(i);
            memory[i] = `string${result}`
        }
    }, 10);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
