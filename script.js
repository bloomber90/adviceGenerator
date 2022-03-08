const quote = document.querySelector('.quote')
const number = document.querySelector('.number')
const btn = document.querySelector('.btn-generator')

const URL = 'https://api.adviceslip.com/advice'



const funcEngine = () => {
    
axios.get(URL).then((res) => {
    console.log(res)
    quote.textContent = `"${res.data.slip.advice}"`
    number.textContent = res.data.slip.id;
})}

btn.addEventListener('click', funcEngine)

