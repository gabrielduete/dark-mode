var mudar = false
function mudarCor(){ // Função para mudar o tema do página ao clicar na imagem.
    if (mudar == false){
        document.body.style.backgroundColor = 'rgb(0, 0, 0)'
        document.body.style.color = 'rgb(255, 255, 255)'
        document.getElementById('1').style.backgroundColor = 'rgb(255, 255, 255)'
        document.getElementById('1').style.color = 'rgb(0, 0, 0)'
        document.getElementById('2').style.backgroundColor = 'rgb(255, 255, 255)'
        document.getElementById('2').style.color = 'rgb(0, 0, 0)'
        document.getElementById('sol').style.display = 'inline'
        document.getElementById('lua').style.display = 'none'
        document.getElementById('linkedin').style.color = 'rgb(255, 255, 255)'
        document.getElementById('git').style.color = 'rgb(255, 255, 255)'
        document.getElementById('insta').style.color = 'rgb(255, 255, 255)'

        mudar = true
    }else{
        document.body.style.backgroundColor = 'rgb(255, 255, 255)'
        document.body.style.color = 'rgb(0, 0, 0)'
        document.getElementById('1').style.color = 'rgb(255, 255, 255)'
        document.getElementById('1').style.backgroundColor = 'rgb(0, 0, 0)'
        document.getElementById('2').style.color = 'rgb(255, 255, 255)'
        document.getElementById('2').style.backgroundColor = 'rgb(0, 0, 0)'
        document.getElementById('lua').style.display = 'inline'
        document.getElementById('sol').style.display = 'none'
        document.getElementById('linkedin').style.color = 'rgb(0, 0, 0)'
        document.getElementById('git').style.color = 'rgb(0, 0, 0)'
        document.getElementById('insta').style.color = 'rgb(0, 0, 0)'
        mudar = false
    }
}
