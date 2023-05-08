const coffeeMenu = require('./coffee_data')



//Print an array of all the drinks on the menu.
let arr = [coffeeMenu[0].name,coffeeMenu[1].name,coffeeMenu[2].name,coffeeMenu[3].name,coffeeMenu
    [4].name,coffeeMenu[5].name,coffeeMenu[6].name,coffeeMenu[7].name ]
    console.log(arr)

let a = [];
coffeeMenu.forEach(function(obj){
    a.push(obj.name);
})
console.log(a);




// drinks that are 5 and under
let drinkUnder5 = [coffeeMenu[1].name, coffeeMenu[2].name] 
console.log(drinkUnder5)


//Print the total if you were to order one of every drink.
let totalDrinks = coffeeMenu[0].price + coffeeMenu[2].price + coffeeMenu[3].price + coffeeMenu[4].price
    + coffeeMenu[5].price + coffeeMenu[6].price + coffeeMenu[7].price
    console.log(totalDrinks)
 

 //Print an array of drinks that are priced at an even number.
 let evenDrinks = [coffeeMenu[0].name, coffeeMenu[4].name, coffeeMenu[6].name, coffeeMenu[7].name, coffeeMenu[8].name];
 console.log(evenDrinks)


 //Print an array with all the drinks that are seasonal.
 let seasonalDrinks= [coffeeMenu[3].name, coffeeMenu[8].name]
 console.log(seasonalDrinks)

 //Print all the seasonal drinks with the words "with imported beans" after the item name. 
 //For example: "affogato with imported beans"
 function findSeaDrnks (arg){
 let seasonalDrinksWords = `${arg} with imported beans`
console.log(arg)
 }
 findSeaDrnks(coffeeMenu[3].name)
 findSeaDrnks(coffeeMenu[8].name)


