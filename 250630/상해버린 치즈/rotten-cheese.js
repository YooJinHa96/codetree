const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, d, s] = input[0].split(' ').map(Number);

const info1 = [];
for (let i = 1; i <= d; i++) {
    const [p, cheese, t] = input[i].split(' ').map(Number);
    info1.push({ p, cheese, t });
}

const info2 = [];
for (let i = d + 1; i <= d + s; i++) {
    const [p, t] = input[i].split(' ').map(Number);
    info2.push({ p, t });
}

// 걸: 사람별 먹은 치즈 시간 기록
const personEat = Array.from({ length: n + 1 }, () => []);
const cheeseEat = Array.from({ length: m + 1 }, () => []);

for (const { p, cheese, t } of info1) {
    personEat[p].push({ cheese, t });
    cheeseEat[cheese].push({ p, t });
}

// 걸: 가능한 상한 치즈 후보는 처음엔 전체
let possible = new Set(Array.from({ length: m }, (_, i) => i + 1));

// 걸: 아픈 사람마다 조건에 맞는 치즈만 필터
for (const { p, t } of info2) {
    const validCheese = personEat[p].filter(e => e.t < t).map(e => e.cheese);
    possible = new Set([...possible].filter(c => validCheese.includes(c)));
}

// 걸: 각 상한 치즈 후보마다 몇 명이 먹었는지 세기
let answer = 0;

for (const cheese of possible) {
    const peopleSet = new Set();
    for (const { p } of cheeseEat[cheese]) {
        peopleSet.add(p);
    }
    answer = Math.max(answer, peopleSet.size);
}

console.log(answer);
