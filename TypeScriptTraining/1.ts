console.log('welcome to typescript');
let name1:string='Lakshmi';
let strLength1:number=(<string>name1).length;
let strLength2=(name1 as string).length;

enum Coins{
    penny=1,dime=10,quarter=25,one
}

interface Employee{
    firstName:string;lastName:string;
}

let emp:Employee;
emp={
    firstName:'Lak',
    lastName:'LN'
}

function newEmp(emp:Employee):void{

}
class Emp{
    fullName:string;
    constructor(public firstName,public lastName){
        this.fullName=firstName+lastName;
    }
 }
 let ee=new Emp('Tim','monthy');
 //Arrow function

 let increment=(x)=>x+1;
 class Test{
     constructor(public a:number){}
     add=(b:number):number=>{
         return this.a+b;
     }
 }

 let eno:number=100;
 let ename:string='Charles';

 let ee1:[number,string];
 ee1=[100,'Charles'];
 let product:[number,string][];
 product=[[100,'laptop'],[101,'Desktop'],[103,"Keyboard"]];
 
 let sum=(x:number, y:number)=>x+y;
 sum(2,4);

 class Fruits{
     readonly fruitId:number;
     constructor(fruitId:number){
         this.fruitId=fruitId;
     }
    }
     let frt=new Fruits(111);
     //frt.fruitId=123; //Compile time error
     //Generics
     interface KVP<T,U>{
         key:T;
         value:U;
     }
   let kvp1:KVP<number,string>={key:123,value:'abc'}
   let kvp2:KVP<number,number>={key:123,value:1234}

   //REST parameter

   function call(name:string,...addresses:string[]){
       return name+' '+addresses;
   }
   call('Bipin','address1','address2','address3');