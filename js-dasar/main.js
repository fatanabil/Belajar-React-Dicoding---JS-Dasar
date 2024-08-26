// score = 90;

// function scoreChecker(score) {
//     let result;

// if (score >= 90) {
//     result = 'Selamat! Anda mendapatkan nilai A.';
// } else if (score >= 80 && score < 90) {
//     result = 'Anda mendapatkan nilai B.';
// } else if (score >= 70 && score < 80) {
//     result = 'Anda mendapatkan nilai C.';
// } else if (score >= 60 && score < 70) {
//     result = 'Anda mendapatkan nilai D.';
// } else {
//     result = 'Anda mendapatkan nilai E.';
// }

//     return result;
// }

// const name = 'Dicoding';
// const language = 'JavaScript';

// console.log(`Hello $name. Welcome to $language`);

// const restaurant = new Object({
//     "name": "Slamet Restaurant",
//     "city": "Malang",
//     "favourite drink": "Avocado Juice",
//     "favourite food": "Chicken Steak",
//     "isVegan": false
// });

// const name = restaurant.name;
// const favouriteDrink = restaurant['favourite drink'];
// console.log(restaurant);
// console.log(name);
// console.log(favouriteDrink);

// let evenNumber = [];

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         evenNumber.push(i);
//     }
// }

// console.log(evenNumber);

// const currency = new Map([
//     ['USD', 14000],
//     ['JPY', 131],
//     ['SGD', 11000],
//     ['MYR', 3500]
// ]);

// const priceInJPY = 5000;

// let priceInIDR = priceInJPY * currency.get('JPY');

// console.log(currency);
// console.log(priceInIDR);

// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
// delete artistsAndSongs["Keyakizaka46"];
// artistsAndSongs["Blackpink"].push("Rose - Gone");

// console.log(artistsAndSongs);

// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);'

function fetchUsername() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('JSUser');
        }, 3000);
    })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
    console.log(`You are logged in as ${value}`);
})
console.log("Welcome!");