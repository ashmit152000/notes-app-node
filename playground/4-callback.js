// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000);

// const names = ["Ashmit", "Anirudh", "Sara", "Rajit"]
// const shortNames = names.filter((name) => {
//     return name.length <= 6
// })

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lat: 0,
//             lon: 0,
//         }
//         callback(data)
//     }, 2000);
// }

// geoCode("New Delhi", (data) => {
//     console.log(data)
// })

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num1 + num2
        callback(sum)
    }, 2000);
}

add(1, 4, (sum) => {
    
    console.log(sum) // Should print: 5
})