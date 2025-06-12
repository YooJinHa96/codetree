const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 입력 처리
const n = Number(input[0]);
const [a1, b1, c1] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

// 거리 함수 (원형 거리)
function isClose(x, y) {
  const diff = Math.abs(x - y);
  return Math.min(diff, n - diff) <= 2;
}

// 조건을 만족하는지 확인하는 함수
function isValid(x, y, z, ref) {
  return isClose(x, ref[0]) && isClose(y, ref[1]) && isClose(z, ref[2]);
}

const seen = new Set();

for (let x = 1; x <= n; x++) {
  for (let y = 1; y <= n; y++) {
    for (let z = 1; z <= n; z++) {
      if (isValid(x, y, z, [a1, b1, c1]) || isValid(x, y, z, [a2, b2, c2])) {
        seen.add(`${x},${y},${z}`);
      }
    }
  }
}

console.log(seen.size);
