// console.log("hello world");
// var a;
// a = 10;
// console.log(a);
// let b = 20;
// let c = b + a;

// const { useCallback } = require("react");

// console.log(b);
// console.log(c);


// var a=30;
// var str="hello";
// var bool=true;
// var und;
// var big=BigInt(12345678901234567890);
// var sym=Symbol("id");
// console.log(typeof a);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof und);
// console.log(typeof big);
// console.log(typeof sym);

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**2);

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a!=b);

// a=true;
// b=false;
// console.log(a&&b);
// console.log(a||b);
// console.log(!a);     

// var arr=[1,2,3,4,5];
// console.log(arr);

// let age = 20;

// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result);

// var arr1=[10,20,30];
// var arr2=[...arr1,40,50,60];
// console.log(arr2);

// var [m1,m2,m3,m4 ,m5]=[80,90,89,98,77];
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);

// var arr3=[10,20,30,40,50];

// for(let value of arr){
//     console.log(value);
// }
// var obj={name:"John", age:25, city:"New York"};

// for(let key in obj){
//     console.log(key + ": " + obj[key]);
// }
// for(let val of arr){
//     console.log(val);
    
// }

// let arr =[10,20,30,40,50];
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr);
//  let arr=[1,2,3,4,5];
// var double_arr=arr.map((i)=>(i*2));
// console.log(double_arr);

//   var even = arr.filter((i)=>(i%2==0));
//   console.log(even);

//   var total=arr.reduce((sum,i)=>(sum+i),0);
//   console.log(total);

//  tota_sum=arr.map((num)=>(num*2)).filter(((num)=>(num%2==0))).reduce((sum,num)=>(sum+num),0);
//     console.log(tota_sum);


//     var n=5;
//     var flag=true;
//     if(n<1) flag=false;
//     else{
//         for(var i=2;i<=Math.sqrt(n/2);i++){
//             if(n%i==0){
//                 flag=false;
//                 break;
//             }   
//         }
//     }
//     console.log(flag?"prime":"not prime");

// var name ="mukesh";
// console.log('my name is ${name}');

// arr.forEach((value,index)=>{
//     console.log(index,value);
// });
// var main = (CallBack) => {
//     console.log("i am main");
//     CallBack()
// }

// var demo = () => {
//     console.log("i am callback");
// }
// main(demo)


//  var promise = new Promise((resolve, reject) => {
//      var success = true;
//      if (success) {
//             setTimeout(() => {
//                 resolve("promise resolved");
//             },5000)
//         }
//      else {
//          reject("promise rejected");
//      }
//  })
//  promise.then((res) =>console.log(res))
//      .catch((err) =>console.log(err));

//     const getData = async () => {
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//     }
//     getData().then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));

const getData = async () => {
    try {
        var response = await fetch('https://jsonplaceholder.typicode.com/posts');
        var data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log('Error:', error);
    }
    
}
getData();