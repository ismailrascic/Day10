function myFunction(checkProp)
{
  var myObj =
  {
    title: "Titanic",
     song: "My Heart Will Go On",
      genre: "drama"
};
if(myObj.hasOwnProperty(checkProp) )
{
  var myObj=myObj[checkProp];
   return myObj;
}
return "Not Found";
    

}
console.log (myFunction("title"));
console.log (myFunction("song"));
console.log (myFunction("genre"));
console.log (myFunction("actor")); 

module.exports = myFunction;