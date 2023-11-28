/**
 * const,let等の変数宣言
//  */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// let変数は上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数を再宣言";

// const変数を宣言
// const val3 = "const変数";
// console.log(val3);

// const変数は上書き・再宣言不可能
// val3 = "a";
// console.log(val3);

// constで定義したプリミティブ型は変更不可だが、
// constで定義したオブジェクトはプロパティの変更が可能
// const obj1 = {
//     name:"arusu",
//     age:27
// }
// console.log(obj1);
// obj1.name = "akisame";
// obj1.address = "Tokyo";
// console.log(obj1);

// constで定義した配列はプロパティの変更が可能
// const arr1 = ["dog","cat"];
// console.log(arr1);
// 上書き
// arr1[0] = "ant";
// console.log(arr1);
// 要素の追加
// arr1.push("bird");
// console.log(arr1);

/**
 * テンプレート文字列
 */
// const name = "arusu";
// const age = 27;

// 「私の名前は$です。年齢は$です。」
// 従来の方法
// const mes1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(mes1);
// テンプレート文字列を用いた方法
// バッククォートを利用する
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//     return str;
// }

// 関数を変数に格納
// const func1 = function(str){
//     return str;
// }

// console.log(func1("func1を呼び出しました"));
// アロー関数
// const func2 = (str) => {
//     return str;
// }
// 引数が一つの場合は() =>の()をつけなくても動く。
// const func2 = str => {
//     return str;
// }
// 処理が単一行の場合は、{}をつけなくても動く
// const func2 = str => str;
// console.log(func2("func2を呼び出しました"));

// const add = (a,b) => a+b;
// let a=5;
// let b=10;
// console.log(`add関数を呼び出し${a}+${b}を計算しました->${add(a,b)}`);

// 関数の結果として処理としては単一行だが、複数行にわたるオブジェクトを返す場合は
// () => ({})のように記載できる
// const func3 = (num1,num2) => ({
//     n1 : num1,
//     n2 : num2
// });
// console.log(func3(5,12));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "arusu",
//     age:27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// nameとageにmyProfileから取り出し(分割代入)
// const {name,age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["arusu",27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// 好きな変数名を指定する
// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値(引数、分割代入)
 */
// const sayHello = (name="guest") => console.log(`こんにちは!${name}さん！`);
// sayHello("arusu");

// const myProfile = {
//     name:"arusu",
//     age:27
// };
// const {name="guest",age} = myProfile;
// console.log(`設定情報：${name},${age}`);

/**
 * オブジェクトの省略記法
 */
// const name = "arusu";
// const age = 27;

// const myProfile = {
//     name : name,
//     age : age
// };
// console.log(myProfile);

// 設定名と変数名が一致する場合は省略できる
// const myProfile2 = { name,age };
// console.log(myProfile2);

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// 中身を展開して引数として渡す
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(`${num1},${num2},...,${arr3}`);

// 配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// 展開したものを再度配列化
// const arr6 = [...arr4];
// console.log(arr6);

// 配列の結合
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["arusu","aki","darede"];
// 従来のfor
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }

// map
// nameArr.map(name => console.log(name));
// const nameArr2 = nameArr.map(name => name);
// console.log(nameArr2);
// 第二引数はindex番号を返す
// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です。`));

// filter
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// nameArr.map((name,index) => {
//     if(name != "arusu")
//         name += "さん";
//     console.log(`${index+1}：${name}`);
// });

/**
 * 三項演算子
 */
// 条件 ? trueの時 : falseの時
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//     return num1+num2 > 100 ? "100より大きいです" : "許容範囲です";
// }

// console.log(checkSum(50,60));
// console.log(checkSum(20,60));
