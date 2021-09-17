// Callback 

// const doWorkCallback = (callback) => {
//     setTimeout(() => {
//         // callback('This is my error', undefined)
//         callback(undefined, 'This is the first result')
//     }, 2000);
// }

// doWorkCallback((error, result) => {
//     if(error){
//         return console.log(error)
//     }

//     console.log(result)
// })


// Promises 

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1,4,7])
        reject("Things went wrong")
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log("Success")
    console.log(result)
}).catch((error) => {
    console.log("Error: ",error)
    
})

