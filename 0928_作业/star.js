//第三题
//用JavaScript编写程序，取名 `star.js`，在控制台输出如下图形：
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

var str = "";                                        //在控制台输出要采用字符串拼接，所以先定义一个空字符串
        for (var row = 1; row <= 4; row++) {         //外层循环控制行数,先输出上半部分的4行

            for (var j = 1; j <= 4 - row; j++) {    
                str = str + " "                      
            } 
            for (var i = 1; i <= row; i++) {          //星星数
                str = str + "* ";
            }
            str = str + "\n";                         //外层循环，每输出一行要换行
        }
        //下半部分和上半部分大致相同
        for (var row = 1; row <= 3; row++) {          //外层循环控制行数,输出下半部分的3行

            for (var j = 1; j <= row; j++) {         
                str = str + " " 
            } 
            for (var i = 1; i <= 4 - row; i++) {      //星星数 
                str = str + "* ";                       
            }
            str = str + "\n";                         //外层循环，每输出一行要换行
        }
        console.log(str);
