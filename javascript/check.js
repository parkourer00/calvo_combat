const players = [
    {
        playerClass:"calvotop",
        id:"player1",
        color:"red"
    },
    {
        playerClass:"calvotop",
        id:"player2",
        color:"blue"
    }
]
console.log("s")
function check(playerClass, player, id){
    console.log("oj")
    for(let element of window.document.getElementById(players[player].id).children){
        element.style.borderColor = "black"
    }
    players[player].playerClass = playerClass
    window.document.getElementById(id).style.borderColor = players[player].color
}
function send(){
    window.location.href = `game.html?player1=${players[0].playerClass}&player2=${players[1].playerClass}`;
}