const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => {
  const [x1, x2] = line.split(' ').map(Number);
  return [{ x: x1, y: 0 }, { x: x2, y: 1 }];
});

// ccw 함수 (Counter Clockwise)
function ccw(a, b, c) {
  const cross = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
  return cross > 0 ? 1 : cross < 0 ? -1 : 0;
}

// 두 선분이 교차하는지 판별
function isIntersect(a1, a2, b1, b2) {
  const ab = ccw(a1, a2, b1) * ccw(a1, a2, b2);
  const ba = ccw(b1, b2, a1) * ccw(b1, b2, a2);
  return ab < 0 && ba < 0;
}

const intersected = new Array(n).fill(false);

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const [a1, a2] = segments[i];
    const [b1, b2] = segments[j];
    if (isIntersect(a1, a2, b1, b2)) {
      intersected[i] = true;
      intersected[j] = true;
    }
  }
}

const result = intersected.filter(x => !x).length;
console.log(result);