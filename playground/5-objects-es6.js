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
    salePrice: 123
}

const {label: productLabel, price, salePrice, rating = 5} = products

console.log(productLabel) 
console.log(price)
console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type,label, stock)

}

transaction('order', products)






