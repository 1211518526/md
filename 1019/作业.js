/*
作业1
小明和他家人在泰国旅游，到3个不同的饭店吃饭。账单(bill）分别是124元、48元
和268元。

为了给服务员小费(tip)，小明创建了一个简单的小费计算器函数（tipCalculator)。如
果账单小于50元，他会给账单的20%作为小费﹔如果账单在50到200元之间，他会
给账单的15%作为小费;如果账单超过200元，他会给账单的10%作为小费。

小明想要⒉个数组:1）一个数组包含所有三个小费（每个账单一个)﹔2)一个数组包
含所有三个最终支付的金额（账单＋小费)。

最后把这2个数组输出到控制台。
*/
const tipCalculator = function(a,b,c) {  
    if (a  < 50){
        a1 = a *0.2
        a2 = a *1.2      
    }else if(50<= a <=200 ){
        a1 = a *0.15
        a2 = a *1.15
    }else{
        a1 = a *0.1
        a2 = a *1.1
    }
     
    if (b < 50){
        b1 = b *0.2
        b2 = b *1.2 
    }else if(50<= b <=200 ){
        b1 = b *0.15
        b2 = b *1.15
    }else{
        b1 = b *0.1
        b2 = b *1.1
    }
     
    if (c < 50){
        c1 = c *0.2
        c2 = c *1.2 
    }else if(50<= c <=200 ){
        c1 = c *0.15
        c2 = c *1.15
    }else{
        c1 = c *0.1
        c2 = c *1.1
    }
    list1 =[a1,b1,c1]
    list2 =[a2,b2,c2]
    console.log('小费账单'+list1)
    console.log('最终应付的账单'+list2)
};
console.log(tipCalculator(124,48,268))


/*
作业2
假设有三个数a、b、c，求这三个数的平均值的函数为∶
    function mean(a，b，c){
        return (a + b + c)/ 3;
    }
1.如果要求任意个数的数字的平均值，该如何改进这个函数呢?请编写改进的
mean1()函数，让该函数可以计算任意个数的数字的平均值。
提示:使用扩展运算符
2.请编写函数mean2()，使用数组的reduce()函数改写mean1()，让代码更
佳精简。
3.请在第二步的基础上编写函数mean3()，实现只对数组中的偶数求平均值。
提示︰使用回调函数和map()。

 */

function mean1(...arges){
    let sum=0;
    for(let arg of arges){
        sum=arg+ sum
    }
    return sum/args.lenth;
}

console.log(mean(1,2,3,4,5));


function mean2(...arges) {
    return arges.reduce((sum, val) => sum + val) / arges.length;
}
console.log(mean2(1,2,3,4,5))

function mean3(...arges){
    const args1 = arges.filter( x => x%2 ==0)
    return  args1.reduce((sum, val) => sum + val) /  args1.length;
   
}
console.log(mean3(1,2,3,4,5))
