// const state = {
//     stock: {
//         coffeBeans: 1000,
//         water: 1000,
//     },
//     isCoffeMachineBusy: false
// };

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan");
//             } else {
//                 reject("Mesin kopi sedang sibuk");
//             }
//         }, 1000);
//     })
// };

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("stock cukup");
//             } else {
//                 reject("stock tidak cukup");
//             }
//         }, 1500);
//     })
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air ...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     });
// }

// const grindCoffee = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi ...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap");
//         }, 1000);
//     })
// }

// const brewCoffee = () => {
//     console.log("Membuat kopi anda ... ");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap");
//         }, 2000);
//     });
// }

// const makeEspresso = () => {
//     checkAvailability()
//         .then(value => {
//             console.log(value);
//             return checkStock();
//         })
//         .then(value => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffee()];

//             return Promise.all(promises);
//         })
//         .then(value => {
//             console.log(value);
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//         })
//         .catch(reject => {
//             console.log(reject);
//         });
// };

// makeEspresso();

// class NetworkError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'NetworkError';
//     }
// }

// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOffline) {
//                 reject(new NetworkError('Gagal mendapatkan data dari internet'), null);
//             }
//             resolve({ name: 'John', age: 18 });
//         }, 1000);
//     })
// };

// const gettingUserName = async () => {
//     try {
//         const res = await fetchingUserFromInternet(false);
//         return res.name;
//     } catch (rejectReason) {
//         console.log(rejectReason);
//     }
// };

// gettingUserName().then(value => console.log(value))

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