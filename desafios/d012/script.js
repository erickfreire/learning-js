function mudar(){
    var output = document.getElementsByTagName('p')[0]
    var precoAnterior = Number(prompt('Qual era o preço anterior do produtor?').replace(',','.'))
    if(isNaN(precoAnterior)){
        alert('Digite um valor válido!')
        return
    }
    var precoAtual = Number(prompt('Qual é o preço atual do produto?').replace(',','.'))
    if(isNaN(precoAtual)){
        alert('Digite um valor válido!')
        return
    }


    output.innerHTML = ''
    if(precoAnterior>precoAtual){
        output.innerHTML += `O produto custava R$ ${precoAnterior} e agora custa R$$ ${precoAtual}.`
        output.innerHTML += `Hoje o preço está mais barato.`
        output.innerHTML += `O preço caiu R$ ${precoAnterior-precoAtual} em relação ao preço anterior.`
        
        //Uma variação de _ por centro pra baixo.
    }else{

    }


    (precoAnterior/100) * 

    


}