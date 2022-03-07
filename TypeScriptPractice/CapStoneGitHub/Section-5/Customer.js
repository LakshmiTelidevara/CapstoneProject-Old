var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast, theAge) {
        this.firstName = theFirst;
        this.lastName = theLast;
        this.age = theAge;
    }
    return Customer;
}());
//now let's use it
var myCustomer = new Customer("Kevin", "Smith", 30);
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
console.log(myCustomer.age);
