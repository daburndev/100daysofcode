
// let random = Math.floor(Math.random() * 10) + 1;
// if (random < 5) {
//     console.log("YOUR NUMBER IS LESS THAN 5!!!")
// }
// else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 5!!!")
// }
// console.log(random);


// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek ==='monday') {
//     console.log(" Ughh I hate Mondays!!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yayy I love Saturdays!!")
// } else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!!")
// } else {
//     console.log("MEH")
// }



// 0-5 - FREE 
// 5-10 - CHILD $10 
// 10-65 ADULT $20
// 65+ SENIOR $10

// const age = 89;

// if (age < 5){
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if ( age< 65) {
//     console.log("You are an adult. You pay $20")
// }else {
//     console.log("You are a senior. You pay $10")
// }



const password = prompt("please enter a new password");

// Password must be 6+ characters
// Password cannot include space
if(password.length >=6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid Password!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Password too short! Must be 6+ characters")
}



