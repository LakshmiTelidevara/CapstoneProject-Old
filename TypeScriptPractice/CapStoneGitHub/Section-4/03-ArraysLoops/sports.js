var sportsOne = ["Cricket", "Football", "Hockey", "Tennis"];
//for (let i=0; i< sportsOne.length; i++){
//console.log(sportsOne[i]);
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var arrSports = sportsOne_1[_i];
    if (arrSports == "Football") {
        console.log(arrSports + "<<I can neither play nor watch this game>>");
    }
    else {
        console.log(arrSports);
    }
}
