var myPet =
{
species: "PitBull",
 name: "Riki",
legs: 4,
friends: ["Tiki", "Taki"]
};

function myfunction(myObj)
{
return myObj;
}


console.log(myfunction(myPet));
module.exports = {myPet, myfunction}