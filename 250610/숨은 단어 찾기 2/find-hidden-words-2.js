const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, n + 1);
// Please Write your code here.

let dx = [1,0,-1,0,-1,-1,1,1];
let dy= [0 ,1,0,-1,-1,1,-1,1];
let count =0; 
for(let i =0 ; i < n; i++){
    for(let j=0 ; j<m;j++){
        if(arr[i][j]==='L')
        {
            let cx = i;
            let cy = j
            for(let k=0 ; k<8;k++){
                let nx = cx+dx[k];
                let ny = cy + dy[k];
                let flag =false
                for(let q =0 ; q<2; q++){
                    if( isRange(nx,ny)&&arr[nx][ny]==='E'){
                        nx += dx[k];
                        ny += dy[k];
                        flag=true;
                    }
                    else {
                        flag=false;
                        break;
                    }
                }
                if(flag) count++;
            }
        }
    }
}
console.log(count)
function isRange(x,y){
    if(0<=x && x<n && 0<=y&&y<m){
        return true;
    }
    else return false;
}
