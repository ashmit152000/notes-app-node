console.log('The Javascript part is done!!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
weatherForm.addEventListener('submit',(e) => {
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
    response.json().then((data) => {
        messageOne.textContent = 'Loading...'
        messageTwo.textContent = ''
        if(data.error) {
            messageTwo.textContent = data.error
        }else {
            console.log(data.location)
            console.log(data.forecast)
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})