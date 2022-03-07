console.log('welcome to typescript');
var name1 = 'Lakshmi';
var strLength1 = name1.length;
var strLength2 = name1.length;
var Coins;
(function (Coins) {
    Coins[Coins["penny"] = 1] = "penny";
    Coins[Coins["dime"] = 10] = "dime";
    Coins[Coins["quarter"] = 25] = "quarter";
    Coins[Coins["one"] = 26] = "one";
})(Coins || (Coins = {}));
var emp;
emp = {
    firstName: 'Lak',
    lastName: 'LN'
};
function newEmp(emp) {
}
var Emp = /** @class */ (function () {
    function Emp(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Emp;
}());
var ee = new Emp('Tim', 'monthy');
//Arrow function
var increment = function (x) { return x + 1; };
var Test = /** @class */ (function () {
    function Test(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Test;
}());
var eno = 100;
var ename = 'Charles';
var ee1;
ee1 = [100, 'Charles'];
var product;
product = [[100, 'laptop'], [101, 'Desktop'], [103, "Keyboard"]];
var sum = function (x, y) { return x + y; };
sum(2, 4);
var Fruits = /** @class */ (function () {
    function Fruits(fruitId) {
        this.fruitId = fruitId;
    }
    return Fruits;
}());
var frt = new Fruits(111);
var kvp1 = { key: 123, value: 'abc' };
var kvp2 = { key: 123, value: 1234 };
//REST parameter
function call(name) {
    var addresses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        addresses[_i - 1] = arguments[_i];
    }
    return name + ' ' + addresses;
}
call('Bipin', 'address1', 'address2', 'address3');
