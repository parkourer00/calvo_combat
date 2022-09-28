const maps = [
    "calvo_combat/medias/images/fundo/fundo-barbearia.jpg",
    "calvo_combat/medias/images/fundo/KABELELEILALEILOA.png",
    "calvo_combat/medias/images/fundo/calvo10.jpg",
    "calvo_combat/medias/images/fundo/rinha_de_calvo.png"
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
    canvas.style.backgroundImage = `url('${maps[Math.floor(Math.random() * maps.length)]}'`
    var calvo01 = new CalvoTop({
        position:{
            x:0,
            y:0
        },
        team:true
    })
    var calvo02 = new CalvoTop({
        position:{
            x:200,
            y:0
        },
        team:false
    })
    calvosList = [calvo01, calvo02]
    game()
}
play()

