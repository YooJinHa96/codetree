const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


// Please write your code here.
let result = -1;
for(let i =0 ; i < grid.length-1 ; i++){
    let firstMax=-1;
    for(let j=0 ; j < grid.length-2 ; j++){
        firstMax=Math.max(grid[i][j]+ grid[i][j+1] + grid[i][j+2])
    }
    for(let j=i+1; j<grid.length ; j++){
        for(let k=0; k < grid.length-2; k++){
            result = Math.max(result, firstMax+ grid[j][k]+grid[j][k+1]+grid[j][k+2])
        }
    }
}
console.log(result)