var players= {
7: "Muhamed Besic",
10: "Miralem Pjanic",
11: "Edin Dzeko"

};
function myFunction(myObj)
{  
   var plyerNumber = 10 ;
   var player = players["10"];
   
    return player ;
}

console.log(myFunction(players));
module.exports = myFunction(players, myFunction);