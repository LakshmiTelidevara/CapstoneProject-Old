let sportsOne: string[] =["Cricket", "Football", "Hockey", "Tennis"];
//for (let i=0; i< sportsOne.length; i++){
//console.log(sportsOne[i]);

for (let arrSports of sportsOne){
    if(arrSports == "Football"){
        console.log(arrSports +"<<I can neither play nor watch this game>>")
    } else{
    console.log(arrSports);
}

}

