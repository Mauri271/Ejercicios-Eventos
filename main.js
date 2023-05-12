//Ejercicio N°1

let formulario = document.getElementById("formularioIMC")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    (e.target[3].value) = Number((e.target[1].value) / (e.target[0].value**2)*10000).toFixed(1)
})


//-----------barra espaciadora-----------
//Ejercicio N°2

let dolar = document.getElementById("dolar")
let pesoArgentino = document.getElementById("pesos")

dolar.addEventListener("input", ()=>{
    pesoArgentino.value = Number(dolar.value*480)
})

pesoArgentino.addEventListener("input", ()=>{
    dolar.value = Number(pesoArgentino.value/480)
})
