// Object property shorthand

const myName = "Ashmit"
const userAge = 20

const user = {
    myName,
    age: userAge,
    location: "New Delhi"
}
console.log(user)
// Object destructuring 
const products = {
    label: "Red Notebook",
    price: '$3', 
    stock: 201, 
    salePrice: undefined
}

const {label, price} = products

console.log(label)
console.log(price)





