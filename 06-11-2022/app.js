// var userName;

// console.log(userName);

// num++   Post Increment
// ++num   Pre Increment

// num--   Post Decrement
// --num   Pre Decrement


// var num = 1;
// // var newNum = num++; /// assign then increment
// var newNum = ++num; ///  increment then assign 

// console.log(num, "num", newNum, "newNum");


// var num = 5 + 2 * 2;

// var numOne = (5 + 2) * 2;

// var numTwo = ((3 + 7) - (4 + 8))

// var numThree = 6 + (8 * (6 - 3) - 1)

// var numFour = (8 / ((7 - 3) + (2 + 4)));

// console.log(num, "num", numOne, "numOne");
// console.log(numTwo, "numTwo", numThree, "numThree");
// console.log(numFour);

// var userName = "umair";
// var arr = ["1", "2"];

// var res = userName + arr;

// console.log(res, typeof res)


// var userIq;
// var score = 0;
// var ans = "pakistan"

// var res = prompt("who will win today");

// if (ans == res) {
//     alert("correct");
//     score++;
//     userIq = "Genius";
// }

// console.log(score, "score ", userIq, "userIq")


// if (4 >= 4) {
//     alert("correct")
// }


// var city = "karachi";
// var education = "matric";

// var userCity = "islamabad";
// var userEdu = "matric";

// if (city == userCity || education == userEdu) {
//     alert("you can take admission")
// }
// else {
//     alert("sorry you are not eligible")
// }



// if ((x === y || a === b) && c === d) {
//     g = h;
// }
// else {
//     e = f;
// }

// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }



// var cities = ["karachi", 'islamabad', 'hyderabad',];

// var userDetail = ['userName', 26, 'karachi', 'male', true,
//     ['matric', 'intermediate', 'graduation']]

// console.log(userDetail[5][1]);


// var userName = "umair", city;


// var cities = ["karachi", 'islamabad', 'hyderabad', "larkana", "peshawar"];

// // cities.splice(1, 1);
// // cities.splice(1, 0, "quetta");
// cities.splice(3, 2, 'quetta', "haris");

// console.log("cities = ", cities)

var cities = ["karachi", 'islamabad', 'quetta', "larkana", "peshawar", 'hyderabad'];

for (var i = 0; i < cities.length; i++) {
    if (cities[i] == "islamabad") {
        console.log('found' + i);
        break;
    } else {
        console.log("not found", i)
    }
}