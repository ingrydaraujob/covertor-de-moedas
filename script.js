let quantia = document.querySelector(".quantia")
let botaoConverter = document.querySelector("button")
let resultado = document.querySelector(".resultado")

async function converterMoedas(){
    let requesURL = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${quanti.value}`
    let response = await fetch(requesURL);
    let data = await response.json();
    resultado.textContent = data.result.toFixed(2);

}

botaoConverter.addEventListener("click" , (e) => {
    e.preventDefault();
    converterMoedas();
});