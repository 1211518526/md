//第一题
// Mark和John在PK他们的BMI（Body Mass Index，体重指数）。
// 体重指数是用这个公式计算的：
// $$
// BMI = mass / height^2 = mass / (height * height)。
// $$
// 其中，mass是体重，单位为kg；height为身高，单位为米。
// 请用 JavaScript 编写一个程序，命名为 `bmi.js` ，完成如下任务：
// 1. 用变量存储Mark和John的体重以及身高；
// 2. 计算二人的BMI；
// 3. 创建一个布尔变量，用来包含Mark的BMI是否比John更高；
// 4. 打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
let MarkMass = 150;
let MarkHeight = 180;
let JohnMass = 175;
let JohnHeight = 140;
console.log('2.计算二人的BMI？')
let BMI1 = MarkMass/(MarkHeight*MarkHeight);
console.log("Mark的BMI:"+BMI1.toPrecision(1));

let BMI2 = JohnMass/(JohnHeight*JohnHeight);
console.log("John的BMI:"+BMI2.toPrecision(1));

console.log('4.Mark的BMI是否比John更高？');
if(MarkHeight>JohnHeight){
    console.log('ture');
}
else{
    console.log('fales');
}
