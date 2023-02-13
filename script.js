let pizzaList = document.querySelectorAll(".pizza-span")
let btnRandom = document.getElementById("btnRandom")
let btnChoose = document.getElementById("btnChoose")
let btnReload = document.getElementById("btnReload")
let flavorText = document.getElementById("flavor-text")
let selectedPizzas
let randomPizza
let count

pizzaList.forEach( element => element.addEventListener("click",selected))

function selected(e) {
    if(e.target.parentNode.classList.contains("pizza-selected"))
    {   
        e.target.parentNode.classList.remove("pizza-selected")
    }else{
        e.target.parentNode.classList.add("pizza-selected")
    }
}

btnChoose.addEventListener("click",() => {
    for(let i = 0; i < pizzaList.length; i++){
        if(!pizzaList[i].classList.contains("pizza-selected"))
        {
            pizzaList[i].remove()
        }
    }
    flavorText.innerHTML = "Your selected pizzas:"
    btnRandom.style.visibility = 'visible'
    btnChoose.style.visibility = 'hidden'
})

btnRandom.addEventListener("click", () => {
    selectedPizzas = document.querySelectorAll(".pizza-selected")
    randomPizza = Math.floor(Math.random()*selectedPizzas.length)
    
    let finalPizza = selectedPizzas[randomPizza]
    finalPizza.classList.add("pizza-final")
    finalPizza.classList.remove("pizza-selected")

    selectedPizzas = document.querySelectorAll(".pizza-selected")
    selectedPizzas.forEach( element => element.remove())

    flavorText.innerHTML = "Your random pizza is:"
    btnRandom.style.visibility = 'hidden'
    btnReload.style.visibility = 'visible'
})

btnReload.addEventListener("click", () => {location.reload()})