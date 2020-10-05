//第二题
// John 和 Mike 都在不同的队打篮球。在最近的3场比赛中，John 的队得了89分、120分和103分，
//而 Mike 的队得了116分、94分和123分。

// 用 JavaScript 编写程序，存为 `ball.js`，完成以下任务：

// 1. 计算每队的平均分；
// 2. 决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分；
// 3. 然后改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
// 4. Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台；
// 5. 像前面一样，改变分数以产生不同的赢家，记住可能会有平局。
console.log('1.每队的平均分：');
let arr = [89,120,103];
let sum = 0;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
}
let avg1 = sum/arr.length;
console.log('John球队的平均分：'+avg1);
let John = avg1 ;

let arr1 = [116,94,123];
let sum1 = 0;
for(let i=0;i<arr1.length;i++){
    sum1 += arr1[i];
}
let avg2 = sum1/arr.length;
console.log('Mike球队的平均分：'+avg2);
let Mike = avg2 ;

console.log('2.两队谁的平均分更高？')
if(John>Mike){
    console.log('John平均分更高,平均分为：'+John)
}
if(John<Mike){
    console.log('Mike平均分更高平均分为：'+Mike)
}
else{
    console.log('John与Mike平均分相同，平均分为：'+Mike)
}

console.log('3.改变分数')

let arr3 = [110,120,100];
let sum3 = 0;
for(let i=0;i<arr3.length;i++){
    sum3 += arr3[i];
}
let avg3 = sum3/arr3.length;
let John1 = avg3 ;

let arr4 = [115,95,120];
let sum4 = 0;
for(let i=0;i<arr4.length;i++){
    sum4 += arr4[i];
}
let avg4 = sum4/arr4.length;
let Mike1 = avg4 ;
console.log('两队谁是赢家？')
if(John1>Mike1){
    console.log('John获胜,平均分为：'+John1)
}
if(John1<Mike1){
    console.log('Mike获胜，平均分为：'+Mike1)
}
else{
    console.log('John与Mike平局，平均分为：'+Mike1)
}

console.log('4.加入Mary')
let arr5 = [97,134,105];
let sum5 = 0;
for(let i=0;i<arr5.length;i++){
    sum5 += arr5[i];
}
let avg5 = sum5/arr.length;
console.log('Mary的平均分为：'+avg5);
let Mary = avg5 ;

let max;
let name;
if(avg1 >= avg2){
max = avg1 ;
name = "胜利者为John，分数为：" ;
}else{
max = avg2 ;
name = "胜利者为Mike，分数为：" ; 
}
if(max < avg3){
max = avg3 ;
name = "胜利者为Mary，分数为：" ;
}
console.log(name + max);

console.log('5.改变分数')
let arr6 = [105,135,105];
let sum6 = 0;
for(let i=0;i<arr6.length;i++){
    sum6 += arr6[i];
}
let avg6 = sum6/arr6.length;

let Mary1 = avg6 ;
let max1;
let name1;
if(avg3 >= avg4){
max1 = avg3 ;
name1 = "胜利者为John，分数为：" ;
}else{
max1 = avg4 ;
name1 = "胜利者为Mike，分数为：" ; 
}
if(max1 < avg5){
max1 = avg6 ;
name1 = "胜利者为Mary，分数为：" ;
}
console.log(name1 + max1);