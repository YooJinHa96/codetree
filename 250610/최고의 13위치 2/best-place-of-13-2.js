const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


// Please write your code here.
let result = -1;
for(let i =0 ; i < grid.length ; i++){
    let first=-1;
    for(let j =0  ;j<grid.length- 2 ; j++){
        first = grid[i][j]+grid[i][j+1]+grid[i][j+2]
        for(let k=i ; k < grid.length;k++){
            if(i===k){
                for(let l = j +3 ;l<grid.length-2;l++){
                    result = Math.max(result, first+ grid[k][l]+grid[k][l+1]+grid[k][l+2])
                }
            }else{
                 for(let l =0 ;l<grid.length-2;l++){
                    result = Math.max(result, first+ grid[k][l]+grid[k][l+1]+grid[k][l+2])
                }
            }

        }
    }
    
}
console.log(result)