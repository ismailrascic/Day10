function myFunction(checkProp)
{
  var myObj =
  {
    title: "Titanic",
     song: "My Heart Will Go On",
      genere:" drama"
};
if(myObj.hasOwnProperty(checkProp) )
{
  var myObj=myObj[checkProp]
   return myObj;
}
return "Not found";
    

}
console.log (myFunction("title"));
console.log (myFunction("song"));
console.log (myFunction("genere"));
console.log (myFunction("actor")); 
myFunction();
module.exports = myFunction;