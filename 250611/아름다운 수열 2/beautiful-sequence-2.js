// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split("\n");

// const [n, m] = input[0].split(" ").map(Number);
// const arr1 = input[1].split(" ").map(Number);
// const arr2 = input[2].split(" ").map(Number);

// // Please write your code here.
// let mapper= {};
// for(let i =0 ; i < arr2.length ; i++){
//     if(mapper[arr2[i]]) mapper[arr2[i]]++
//     else mapper[arr2[i]]=1;
// }
// let result =0;
// for(let i =0 ; i<arr1.length - m +1; i++){
//     let arr1Mapper ={}
//      for(let j =i ; j < i+m; j ++){
//         if(arr1Mapper[arr1[j]]) arr1Mapper[arr1[j]]++
//     else arr1Mapper[arr1[j]]=1;
         
//     }
//      let flag=false
//      for(const num in mapper){
//         if(arr1Mapper[num] && arr1Mapper[num]===mapper[num]) flag= true;
//         else{
//             flag=false;
//             break;
//         }
//      }
//      if(flag) result++;
// }
// console.log(result)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number).sort((a, b) => a - b);

// 모든 구간의 시작점을 잡아봅니다.
let cnt = 0;
for (let i = 0; i <= n - m; i++) {
    let tmp = arr1.slice(i, i + m).sort((a, b) => a - b);
    let issame = true;
    for (let j = 0; j < m; j++) {
        if (tmp[j] !== arr2[j]) {
            issame = false;
            break;
        }
    }

    if (issame) cnt++;
}

console.log(cnt);
