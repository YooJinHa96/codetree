const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// 전체 시간 범위 계산
const maxTime = Math.max(...segments.map(([_, b]) => b));

let result = 0;

for (let i = 0; i < n; i++) {
    const timeline = new Array(maxTime).fill(0);

    for (let j = 0; j < n; j++) {
        if (i === j) continue; // i번째 개발자는 제외
        const [start, end] = segments[j];
        for (let t = start; t < end; t++) {
            timeline[t] = 1;
        }
    }

    // 운영 시간 계산
    const runningTime = timeline.reduce((sum, v) => sum + v, 0);
    result = Math.max(result, runningTime);
}

console.log(result);