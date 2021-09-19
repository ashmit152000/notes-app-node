

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

const doWork  = async () => {
   const addOne =  await add(1,99)
    const addTwo = await add(addOne, 100)
    const addThree = await add(addTwo, 800)
    return addThree
}

doWork().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})