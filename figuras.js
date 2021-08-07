//cuadrado

function cuadradoPerimetro(lado){
    return 4 * lado
}

function cuadradoArea(lado){
    return lado * lado
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = cuadradoPerimetro(value)
    alert("El perimetro es: " +perimetro)
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = cuadradoArea(value)
    alert("El perimetro es: " +area)
}

//triangulo



function trianguloPerimetro(base,lado1,lado2,){
    return "El perimetro del triangulo es: "+ base + lado1 + lado2 + "cm"
}
function trianguloArea(base,altura){
    return "El area del triangulo es: "+ (base * altura) / 2 + "cm2"
}


function circuloPerimetro(diametro){
    return "El perimetro del ciruclo es: "+ diametro * Math.PI + "cm"
}
function circuloArea(radio){
    return "El area del circulo es: "+ (radio * radio) * Math.PI + "cm2"
}