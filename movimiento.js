const bitcoin = document.getElementById('b')

/*Variable para la animacion*/
const animation = bitcoin.animate([
{
    /*Rotacion de la animacion */
transform:'rotateX(8)'
},
{
    transform: 'rotateY(360deg)'
}
],{
    /*Duracion de la animacion */
    duration:1000,
    direction:'normal',
    easing: 'linear',
    iterations: Infinity
})

playButton.addEventListener('click',()=> {
    animation.play()
})





