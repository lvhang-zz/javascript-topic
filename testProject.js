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

// 二  记忆法斐波那契函数
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


// 四 请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，
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
        tem = tem[params[i]];// 一层层遍历属性 当属性存在 赋值覆盖 不存在 返回 undefined
        // console.log(tem);
        if(tem == undefined){
            return undefined;
        }
    }
    return tem;
};
// safeGet(data,"q.w.e.r.t.y.u.i.o.p.a.s.d.f.g.h.j.k.l.z.x.c.v");


/** 五 用一个对象的数据来表示一个矩形的位置和大小：
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
    var x1 = rect1.x + rect1.width;
    var y1 = rect1.y + rect1.height;
    var x2 = rect2.x + rect2.width;
    var y2 = rect2.y + rect2.height;
    if(rect1.x > x2){
        return false
    }else if(rect1.y > y2){
        return false
    }else if(x1 < rect2.x){
        return false
    }else if(y1 < rect1.y){
        return false
    }else {
        return true
    }

};


/** 五 完成几个 DOM 元素类名操作的工具方法：
 addClass(dom, name)：给 dom 元素添加类名 name
 removeClass(dom, name)：把 dom 元素的类名 name 删除
 hasClass(dom, name)：判断 dom 元素是否有类名 name
 * */
const addClass = (dom, name) => {
    dom.classList.add(name)
};
const removeClass = (dom, name) => {
    dom.classList.remove(name)
};
const hasClass = (dom, name) => {
    return dom.classList.contains(name);
};


/** 六 请你给字符串都添加上原型方法 spacify，可以让一个字符串的每个字母都多出一个空格的间隔：***/
String.prototype.spacify = function () {
    return this.split('').join(" ");
};
// console.log("2131231".spacify());


/** 七 现在有一个数组存放字符串数据：

 ['item1', 'item2', 'item3', 'item4', 'item5']
 有另外一个数组存放一组对象：

 [
 { content: 'section1', index: 0 },
 { content: 'section2', index: 2 }
 ]
 它每个对象表示的是会往原来的数组的 index 坐标插入 content 数据（index 不会重复）：

 0      1      2      3      4
 item1  itme2  item3  item4  item5
 ^             ^
 |             |
 section1     section2

 最后结果是：['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
 请你完成 injectSections 函数，可以达到上述的功能：

 injectSections(
 ['item1', 'item2', 'item3', 'item4', 'item5'],
 [
 { content: 'section1', index: 0 },
 { content: 'section2', index: 2 }
 ]
 ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']**/
const injectSections = (items, sections) => {
   var arr = items;
   // console.log(sections);
   for(var i = 0;i < sections.length;i++){
       arr.splice(sections[i].index + i,0,sections[i].content);
   }
   // console.log(arr);
   return arr;

};
let items = ['1','2','3','400','5',1,24,434,24,24];
let sections = [
    { content: 'section1', index: 0 },
    { content: 'section2', index: 2 },
    { content: 'section3', index: 3 }
];
injectSections(items,sections);

/** 八 完成 isSameSet 函数，它接受了两个 Set 对象作为参数，请你返回 true/false 来表明这两个 set 的内容是否完全一致，例如：**/

const a = {};
const b = 1;
const c = 'ScriptOJ';

const set1 = new Set([a, b, c]);
const set2 = new Set([a, c, b]);
const isSameSet = (s1, s2) => {
    if (s1.size !== s2.size) {
        return false;
    }
    return [...s1].every(i => s2.has(i))
};
/** 九 编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。例如：unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]**/
//简单方法
const unique = function (arr) {
    let newArr = [];
    arr.forEach((item)=>{
        if(newArr.indexOf(item) < 0){
            newArr.push(item);
        }
    });
    return newArr;
};
let arr = [1,232,323,213,4324,2122,22,12,21,1,1,1,12,22,22,223,33,33,33];
//方法2（最优方法） new Set() 生成 Set 对象(类数组) Array.from() 转化为数组
const unique1 = function (arr) {
    return Array.from(new Set(arr)); // 一行代码解决
};


/**
 * 请你给原生的 Map 添加方法 filterKeys 和 filterValues，可以类似于于数组方法的 filter。它们分别可以对 Map 的键和值进行筛选，它们会返回一个新的 Map， 是对原有的 Map 的筛选结果，例如：
 const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])
 m.filterKeys((key) => key.startsWith('J')) // => Map { Jerry => 12, Jimmy => 13 }
 m.filterValues((val) => val >= 13) // => Map { Jimmy => 13, Tomy => 14  }
 // 原有的 map 保持不变
 console.log(m) // => Map { Jerry => 12 , Jimmy => 13, Tomy => 14 }**/

const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])
Map.prototype.filterKeys = function(fn) {
    return new Map([...this].filter(([k, v]) => fn(k)));
}

Map.prototype.filterValues = function(fn) {
    return new Map([...this].filter(([k, v]) => fn(v)));
}



/**完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。**/
const toChineseNum = (num) => {
    var numArr = num.toString().split('').reverse();
    console.log(numArr);
    var keys = ['零','一','二','三','四','五','六','七','八','九'];
    var counts = ['','十','百','千','万'];
    var numStr = [];
    numArr.forEach((item,index)=>{
        numStr.push(keys[Number(item)] + (keys[Number(item)]=="零"?'':counts[index]))
    });
    var indexL = 0;
    numStr.forEach((item,index)=>{
        if(numStr[indexL] == "零"){
            numStr[indexL] = "";
            indexL+=1
        }
    });
    numStr.forEach((item,index)=>{
        if(item == "零" && numStr[index+1] == "零"){
            numStr[index] = "";
        }
    });
    return numStr.reverse().join('');
};
toChineseNum(99990);
























