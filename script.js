//1. Check Your Math
//Use JavaScript to check and see if the following comparisons are true. For each of the following, log `True fact!` to the console if the condition evaluates to true and `LIES!` to the console if it doesn't.

//Is the sum of 1 and 1 greater than 5?
if(1+1 > 5){
    console.log(`True fact`);
} else{
    console.log(`FAKE NEWS`)
}

//Is the product of 4 and 5 less than our equal to 20?
if(4*5 <= 20){
    console.log(`True fact`);
} else{
    console.log(`FAKE NEWS`)
}

//Is the difference between 6 and 2 greater than or equal to 0?
if(6-2 >= 0){
    console.log(`True fact`);
} else{
    console.log(`FAKE NEWS`)
}

//2. Dog People vs. Cat People
//In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
//If likesDogs is true, log `You're a dog person!` to the console. If not, log `You're a cat person!` to the console.
let likesDogs = true
if(letDogs = true){
    console.log(`You're a dog person`);
}else console.log(`You must serve cats`)

//3. Generation Gaps
//Declare a variable called birthYear and set it equal to your birth year.
//Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
//Try changing the value of birthYear and see what happens.
let birthYear = 1995
if(birthYear <= 1921){
    console.log(`You're a dead man walking`)
} else if(birthYear <= 1927){
    console.log(`You fought in WW2`)
} else if(birthYear <= 1945){
    console.log(`You love watching the History Channel`)
} else if(birthYear <= 1965){
    console.log(`You're a member of Congress`)
} else if(birthYear <= 1976){
    console.log(`You've tried drugs`)
} else if(birthYear <= 1994){
    console.log(`You've been asked to fix a computer`)
} else{
    console.log(`You're viral on TikTok`)
}

//4. Greetings
//In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
//Write a conditional that checks for the following:
//If the person's preferred language is English, print `Hello, [name]!` to the console.
//If the person's preferred language is Spanish print `Hola, [name]!` to the console.
//If their preferred language is French, print `Bonjour, [name]!` to the console.
let definitelyRealHuman = {
    name: `Barry`,
    language: `English`
}

if(definitelyRealHuman.language === `English`){
    console.log(`Hello ${definitelyRealHuman.name}!`)
}else if(definitelyRealHuman.language === `Spanish`){
    console.log(`Hola ${definitelyRealHuman.name}!`)
}else if(definitelyRealHuman.language === `French`){
    console.log(`Bonjour ${definitelyRealHuman.name}!`)
}

//5. Grandma's Kitchen

