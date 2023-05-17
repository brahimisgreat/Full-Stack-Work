/*  Create files index.html
Clone the starter repositoryLinks to an external site. and navigate to the directory.
In the starter repository, an index.js file should already be present with an array of "users" including name, age, and occupation.
In your index.html, create a full HTML document with a single div with an ID of "root".
Inside your main() function, grab the "root" element, add an h1 element, give it text of "FREELANCERS", and append the HTML document.
Continue working inside your main() function to create an unordered list element.
Loop through the users array creating li elements. 
Append those elements to your HTML document.
Style your site using CSS.
*/

const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];


function main() { 
    //Create h1
    //add 'FREELANCERS' to Innerhtml of h1
    //Append h1
   let heading = document.createElement('h1')
   heading.innerHTML = 'FREELANCERS'
   document.body.appendChild(heading)
    //Create ul element
    //append ul element
   let unLi = document.createElement('ul')
   document.body.appendChild(unLi)

   //Loop through the users array creating li elements
   //Append those elements to your HTML document
   for(let i = 0; i < users.length; i++){
   let liTag = document.createElement('li')
   unLi.appendChild(liTag)
   liTag.innerHTML+= `${users[i].name} ${users[i].age} ${users[i].occupation}`
   }

}
//Call main function
main()



/* 
Create button thats changes background color when clicked
*/

//Create button
//Add CLick Me to Button
//Append Button
let btn = document.createElement('button') 
btn.innerHTML = 'ClICK ME'
btn.style.width = '5em'
btn.style.height = '3em'
document.body.appendChild(btn)



//Add Event to Button
//Event change background color of body
btn.addEventListener("click", () => {
    const rndCol = `rgb(${RandomNumber()}, ${RandomNumber()}, ${RandomNumber()})`;
    document.body.style.backgroundColor = rndCol
  });

//function to create random rgb number
  function RandomNumber(){
    return Math.floor(Math.random() * (255 + 1))
}











