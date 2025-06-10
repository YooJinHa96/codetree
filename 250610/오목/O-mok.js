const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input.slice(0, 19).map(row => row.split(' ').map(Number));

// Please Write your code here.

let dx = [1,0,-1,0,-1,-1,1,1];
let dy= [0 ,1,0,-1,-1,1,-1,1];
let win=0;
let wx =0;
let wy =0;
let dir=0;
for(let i=0 ; i<arr.length;i++){

    for(let j =0 ; j<arr.length; j++){
        if(arr[i][j]===1 || arr[i][j]===2){
            for(let k =0 ; k<8;k++){

               let count = omk(i,j,dx[k],dy[k],arr[i][j],1)+1

               if(count===5){

               win=arr[i][j];
               wx =i+1;
               wy=j+1;
               dir=k;
                break;
               }
                     
            }
            if(win >0)break;   
        }

    }
        if(win >0)break;   
}

wx += dx[dir]*2;
wy += dy[dir]*2;
console.log(win)
console.log(wx, wy);
function omk (cx,cy,dx,dy,target,time){
    
    let nx=cx+dx;
    let ny=cy+dy;
    if(time <=5 &&0<=nx&&nx<arr.length&&0<=ny&&ny<arr.length&& arr[nx][ny] === target) return 1 + omk(nx,ny, dx, dy ,target,time++)
    if( arr[nx][ny] !==target) return 0;
  
}