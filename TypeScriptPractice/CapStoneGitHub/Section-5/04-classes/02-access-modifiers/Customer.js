var Customer2 = /** @class */ (function () {
    function Customer2(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
//let's create an instance
var myCustomer1 = new Customer2("Kevin", "Smith");
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
