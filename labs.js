// Q + A
/*
1. To assign a value to a variable by using the (=) sign, along with either a let or const and the variable name
2. To change the value of a variable you need to use the assignment operator (=) to equal the wanted value
3. To Assign an existing value to an existing variable you need to use the assignment operator (=) to equal the existing variable wanted.
4. declaring: creates a new variable within a program, assign: is when you make a variable equal a specific value, define: is to call an existing variable 
5. Pseudocoding: is when you create a layout of the functions for your program before typing the code out
6.
*/

// ==================================================
// STRINGS
// 1.
let firstVariable;
// 2.
firstVariable = 'Hello World';
// 3.
firstVariable = 10;
// 4.
let secondVariable = firstVariable;
// 5.
secondVariable = 'Welcome';
// 6.
console.log(firstVariable);
// 7.
let yourName = 'Kevin';
let greet = 'Hello, my name is ';
console.log(greet + yourName);

// ======================================================
// BOOLEANS
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name'==='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b + c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a > a - d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

// =================================================================

// The Farm
let animal = 'rat';
if(animal === 'cow'){
    console.log('mooooo');
}else{
    console.log("Hey! You're now a cow." );
}
// =================================================================

// Driver's Ed
let age = parseInt(prompt("How old are you?"));
if(age >= 16){
    console.log('Here are the keys!')
}else{
    console.log('Sorry, you are too young');
}
// =================================================================

// ||. Loops

// A. Basics
// 1.
for(let i = 0; i < 10; i++){
    console.log(i)
}
// 2.
for(let i = 10; i <= 400; i++){
    console.log(i)
}
for(let i = 12; i < 4000; i+=3){
    console.log(i)
}
// =================================

// B. Get even
for(let i = 1; i < 100; i++){
    if(i % 2 === 0){
        console.log(`${i} <-- is an even number`)
    }else{
        console.log(i);
    }
}
// =================================

// C. Give me Five
for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0 ){
        console.log(`I found a ${i}. High five! \nI found a ${i}. Three is a crowd`)
    }
    else if(i % 5 === 0){
        console.log(`I found a ${i}. High five!`)
    }
    else if(i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd`)
    }
}
// =================================

// D. Savings account
let bank_account = 0;
// 1.
for(let i = 0; i<=10; i++){
    bank_account+= i;
}
console.log(`$${bank_account}`)
// 2.
for(let i = 1; i<=100; i++){
    num = i *2
    bank_account+= num;
}
console.log(`$${bank_account}`)
// =================================================================

// |||. Arrays & Control flow

// A.Talk about it:
/*
1. The things in an array are called: Elements
2. Arrays do not guarantee that things will be in order.
3. a shopping list
*/
// =================================

// B. Easy Does it
const quotes = ['Life is like riding a bicycle. To keep your balance, you must keep moving.','May the Force be with you.','Not all those who wander are lost.']
// =================================

// C. Accessing elements
const randomThings = [1, 10, "Hello", true]
// 1.
console.log(randomThings[0])
// 2.
randomThings[2] = 'World';
// 3.
console.table(randomThings)
// =================================

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1.
ourClass[2]
// 2.
ourClass[ourClass.length-1] = 'Octocat';
// 3.
ourClass.push('Cloud City');
console.table(ourClass)
// =================================

// E. Mix it Up
const myArray = [5, 10, 500, 20];
// 1.
myArray.push('Aegon');
console.table(myArray)
// 2.
myArray.shift();
console.table(myArray);
// 3.
myArray.unshift('Bob Marley');
console.table(myArray);
// 4.
myArray.pop();
console.table(myArray);
// 5.
myArray.reverse();
console.table(myArray);

/*
The array did mutate, mutate means that the value is able to change, the .reverse() method returned the array in a reverse order
*/
// =================================

// F. Biggie Smalls
let num = 6;
if(num < 100){
    console.log("little number");
}else{
    console.log("big number");
}
// =================================

// G. Monkey in the Middle
if(num < 5){
    console.log("little number");
}
else if(num > 10){
    console.log("big number");
}else{
    console.log("monkey");
}
// =================================

// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

// 1.
console.log(`Kristan is rocking that ${kristynsCloset[2]} today`)
// 2.
kristynsCloset.splice(6,0,'raybans')
// 3.
kristynsCloset[5] = 'stained knit hat';
// 4.
let shirt = thomsCloset[0][0]
// 5.
let pants = thomsCloset[1][1]
// 6.
let shades = thomsCloset[2][2]
// 7.
console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${shades}`);
// 8.
thomsCloset[1][2] = 'Footie Pajamas'
console.table(thomsCloset[1])
// =================================================================

// IV. Functions 
// A. PrintGreeting
function PrintGreeting(name){
    msg = `Hello there, ${name}`;
    return msg;
}

console.log(PrintGreeting(''))
// =================================

// B. PrintCool
function PrintCool(name){
    return `${name} is cool`;
}
console.log(PrintCool('Captain America'))
// =================================

// C. calculateCube
function CalculateCube(num){
    return num**3;
}
console.log(CalculateCube())
// =================================

// D. isVowel
function IsVowel(letter){
    char = letter.toLowerCase();
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }
    else{
        return false;
    }
}
console.log(IsVowel('u'))
// =================================

// E. getTwoLengths
function GetTwoLengths(str1, str2){
    return `${str1.length}, ${str2.length}`;   
}
console.log(GetTwoLengths('Hank','Hippopopalous'));
// =================================

// F. getMultipleLengths
function getMultipleLengths(arr){
    const blank = []
    for(let ind of arr){
        blank.push(ind.length)
    }
    return blank
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// =================================

// G. maxOfThree
function maxOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3
    }
}

console.log(maxOfThree(4,4,4))
// =================================

// H. printLongestWord
function printLongestWord(words){
    let longword = '';
    for(let w of words){
        if(w.length > longword.length){
            longword = w;
        }
    }
    return longword;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// =================================================================

// Objects

// A. Make a user object
const user = {
    name: "John Doe",
    email: 'JohnDoe@gmail.com',
    age: 26,
    purchased: []
}
// B. Update the user
user.email = 'Ichangedit@gmail.com';
user.age+=1
// C.Adding keys and values
user.location = '123 York ave';
// D. Shopaholic
user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
console.table(user);

console.log(user.purchased[2]);
// =================================

// E. Object-within-object

user.friend = {
    name: 'Mike Jones',
    age: 30,
    location: 'Europe',
    purchased: []
}
// =====
console.log(user.friend.name);
// =====
console.log(user.friend.location);
// =====
user.friend.age += 25
// =====
user.friend.purchased.push('The One Ring');
// =====
user.friend.purchased.push('A latte');
// =====
console.log(user.friend.purchased[1])
// =================================================================

// F. Loops

let userList = user.purchased
let friendList = user.friend.purchased

for(let use of userList){
    console.log(use)
}
for(let friend of friendList){
    console.log(friend)
}
// =================================

// G. Functions can operate on objects

const updateUser = function(){
    user.age+=1;
    user['name'].toUpperCase()

}
updateUser();
console.table(user)
