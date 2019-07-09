// const extname = (filename) => {
//     /* TODO */
//     console.log(filename.split("."));
//     var filenamefibonacci.caches = filename.split(".");
//     if(filenamefibonacci.caches.length == 1){
//         return ''
//     }
//     if(filename.split(".")[filename.split(".").length - 1] && filename.split(".")[0] != '' ){
//         return '.' +  filename.split(".")[filename.split(".").length - 1]
//     }else {
//         return ''
//     }
//
//
// };
// console.log(extname("hello.jof.dsds"))

// 二  记忆化斐波那契函数
// 1 1 2 3 5 8 13 21 34
// 1 2 3 4 5 6 7  8  9
/**const fibonacci = (n) => {
    if(!fibonacci.caches){
        fibonacci.caches = [];
        for(var i = 0;i < 10000;i++){
            if(i == 0 || i == 1){
                fibonacci.caches[i+1] = 1;
            }else if(i > 2){
                fibonacci.caches[i] = fibonacci.caches[i-1] + fibonacci.caches[i-2];
            }

        }
    }

    return fibonacci.caches[n ];
};
console.log(fibonacci(9));*/


// 三
/*完成一个 extractStr 函数，可以把一个字符串中所有的 : 到 . 的子串解析出来并且存放到一个数组当中，例如：
extractStr('My name is:Jerry. My age is:12.') // => ['Jerry', '12']
注意，: 和 . 之间不包含 : 和 .。也即是说，如果 ::abc..，则返回 ['abc']*/

const extractStr = (str) => {
    if(str == ''){
        return []
    }else {
        var resuletArr = [];
        let exportArr = (str) => {
            var mIndex = str.indexOf(":");// 第一个:号的位置
            var dIndex = str.indexOf(".");// 第一个.点号的位置
            if(mIndex >= 0 && dIndex >= 0){// 判断两个符号是否都存在
                if(mIndex > dIndex){// 如果第一个.点号的位置在:冒号之前
                    var newStr = str.slice(mIndex);// 切掉第一个冒号之前的内容  再次回调
                    exportArr(newStr);
                }else {
                    var tem  =  str.slice(mIndex,dIndex);// 如果第一个冒号 在第一个点号之前
                    var newStr = str.slice(dIndex);      // 切出两个点之间的内容 保存  剩下的内容再次回调
                    tem = tem.replace(/:/g,'');
                    resuletArr.push(tem);                // 切出的内容包含冒号  去掉冒号

                    exportArr(newStr);
                }
            }else {
                // console.log(resuletArr);
                return resuletArr;// 点号或者冒号只有一个 或者都没有  跳出循环 返回结果
            }
        };
        exportArr(str);
    }

};
// extractStr(".My :name is::Jerry.. My. age is:12. :das:::da..... dasdas....dasdass..das");

extractStr('VPlAlH:xvLSCZ.scXjKCgGwCAe:ETKnqF.:vMPFFh.:zmPXSn.:dBaCWM. ');


//请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，
var data = { a: { b: { c: 'ScriptOJ' } } };
var data =  {"q":{"w":{"e":{"r":{"t":{"y":{"u":"ScriptOJ"}}}}}}};
const safeGet = (data, path) => {
    if(data == ''){
        return ''
    }
    let params = path.split(".");
    var length = params.length;
    var tem = data;
    for(var i = 0;i < length;i++){

        tem = tem[params[i]];
        // console.log(tem);
        if(tem == undefined){
            return undefined;
        }
    }
    return tem;
};
safeGet(data,"q.w.e.r.t.y.u.i.o.p.a.s.d.f.g.h.j.k.l.z.x.c.v");


/**用一个对象的数据来表示一个矩形的位置和大小：
 {
  x: 100,
  y: 100,
  width: 150,
  height: 250
}
 它表示一个宽为 150 高为 250 的矩形在页面上的 (100, 100) 的位置。
 请你完成一个函数 isOverlap 可以接受两个矩形作为参数，判断这两个矩形在页面上是否重叠。例如：
 const rect1 = { x: 100, y: 100, width: 100, height: 100 }
 const rect2 = { x: 150, y: 150, width: 100, height: 100 }
 isOverlap(rect1, rect2) // => true
 * **/

const isOverlap = (rect1, rect2) => {

};
















