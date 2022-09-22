const maps = [
    "../medias/images/fundo/fundo-barbearia.jpg",
    "../medias/images/fundo/fundo-goku.png"
]
var calvosList = []
function game(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    for(let calvo of calvosList){
        calvo.update()
    }
    requestAnimationFrame(game)
}
function play(){
    canvas.style.backgroundImage = `url('${maps[Math.floor(Math.random() * 2)]}'`
    var calvo01 = new Calvo(
        {
            speed:{x:1,y:1},
            size:{width:25, height:75}
        },
        {
            x:0,
            y:0
        },
        true
    )
    var calvo02 = new Calvo(
        {
            speed:{x:1,y:1},
            size:{width:25, height:75}
        },
        {
            x:100,
            y:0
        },
        false
    )
    calvosList = [calvo01, calvo02]
    for(let calvo of calvosList){
        keys.observers.push(calvo.moveListener)
    }
    game()
}
play()

