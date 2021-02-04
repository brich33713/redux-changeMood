const buttonHolder = document.querySelector('#buttonHolder')
const img = document.querySelector('img')

console.log(store.getState())
img.src = `${store.getState().mood}.png`


buttonHolder.addEventListener('click', function (e) {
    e.preventDefault()
    store.dispatch({type:(e.target.innerText)})
    let mood = store.getState().mood
    img.src = `${mood}.png`
})