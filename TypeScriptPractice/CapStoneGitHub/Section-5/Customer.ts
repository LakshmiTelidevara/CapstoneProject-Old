class Customer{

//properties
 firstName: string;
 lastName: string;
age: number;

constructor(theFirst: string, theLast: string, theAge: number) {
      this.firstName = theFirst;
      this.lastName= theLast;
      this.age = theAge;
}

}

//now let's use it
let myCustomer = new Customer("Kevin", "Smith", 30);

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);