// calcular quantas placas a pessoa precisa para atingir a sua média de energia usada mensal


function calcular(energiaMensal, placa){
    let calcularPlacas = energiaMensal / placa
    return calcularPlacas
}



function principal(){
    let placa = 69.37
    let energiaMensal = Number(document.getElementById(`energiaMensal`).value)
    let resultado = calcular(energiaMensal, placa)

    if(resultado >= 1){
        resposta.innerHTML = ``
        resposta.innerHTML += `Você precisa de: ${resultado.toFixed(0)} placas<br>`
    }else if(resultado > 0 && resultado < 1){
        resposta.innerHTML = ``
        resposta.innerHTML += `Média mensal muito baixa.<br>`
    }else{
        resposta.innerHTML = ``
        resposta.innerHTML += `Insira um número válido.<br>`
    }
    
}
