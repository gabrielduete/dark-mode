var mudar = false
function mudarCor(){ // Função para mudar o tema do página ao clicar na imagem.
    if (mudar == false){
        document.body.style.backgroundColor = '#333'
        document.body.style.color = '#fff'
        mudar = true
    }else{
        document.body.style.backgroundColor = 'rgb(228, 220, 220)'
        document.body.style.color = '#333'
        mudar = false
    }
}
