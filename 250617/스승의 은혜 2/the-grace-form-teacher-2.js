const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input[0].split(' ').map(Number);
const prices = input.slice(1).map(Number);

let maxCount = 0;

for (let i = 0; i < n; i++) {
  const discounted = Math.floor(prices[i] / 2);
  const others = prices.slice();
  others[i] = discounted;
  
  others.sort((a, b) => a - b);

  let count = 0;
  let budget = b;
  
  for (let price of others) {
    if (budget >= price) {
      budget -= price;
      count++;
    } else break;
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
