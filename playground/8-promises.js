// // Callback 

// // const doWorkCallback = (callback) => {
// //     setTimeout(() => {
// //         // callback('This is my error', undefined)
// //         callback(undefined, 'This is the first result')
// //     }, 2000);
// // }

// // doWorkCallback((error, result) => {
// //     if(error){
// //         return console.log(error)
// //     }

// //     console.log(result)
// // })


// // Promises 

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([1,4,7])
//         reject("Things went wrong")
//     }, 2000);
// })

// doWorkPromise.then((result) => {
//     console.log("Success")
//     console.log(result)
// }).catch((error) => {
//     console.log("Error: ",error)
    
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

// Calling nested async methods without Promise chaining
// add(1,2).then((sum) => {
//     console.log(sum)
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((error) => {
//         console.log(error)
//     })
// }).catch((error) => {
//     console.log(error)
// })

// Calling nested async method with Promise chaining
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 5)
}).then((sum3) => {
    console.log(sum3)
}).catch((error) => {
    console.log(error)
})






