setTimeout(() => {
    console.log('Two seconds are up')
}, 2000);

const names = ["Ashmit", "Anirudh", "Sara", "Rajit"]
const shortNames = names.filter((name) => {
    return name.length <= 6
})

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lat: 0,
            lon: 0,
        }
        callback(data)
    }, 2000);
}

geoCode("New Delhi", (data) => {
    console.log(data)
})