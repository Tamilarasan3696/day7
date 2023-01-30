var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true)
request.send();
request.onload= function(){
    var data=JSON.parse(request.response)
    
console.log(data)
// Get all the countries from the Asia continent /region using the Filter function

var  res1 = data.filter((element)=>element.region=="Asia")
console.log(res1)

//Get all the countries with a population of less than 2 lakhs using Filter function

var res2 = data.filter((element)=>element.population<200000 )
console.log(res2)

//Print the following details name, capital, flag using forEach function
//name
var res3 = data.forEach((obj) => {
    console.log(obj.name)
  });

  //capital
  var res4 = data.forEach((obj) => {
    console.log(obj.capital)
  });
  // flag
  var res4 = data.forEach((element) => {
    console.log(element.flag)
  });

  //Print the total population of countries using reduce function

  var res5 = data.reduce((acc,cvalue)=>acc+cvalue.population,0)
  console.log(res5)


  //Print the country which uses US Dollars as currency.

var res6 = data.filter((element)=>{
  for (const key in element.currencies) {
    if (element.currencies[key].USD=='United States dollar' )
    console.log(element.name.common)
      
    }














}