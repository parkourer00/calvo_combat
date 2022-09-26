
const keysDown = {
    "w":() => {
        calvosList[0].movements.up = true
        calvosList[0].movements.down = false
    },
    "s":() => {
        calvosList[0].movements.down = true
        calvosList[0].movements.up = false
    },
    "a":() => calvosList[0].movements.left = true,
    "d":() => calvosList[0].movements.right = true,
    "ArrowRight":() => calvosList[1].movements.right = true,
    "ArrowLeft":() => calvosList[1].movements.left = true,
    "ArrowUp":() => {
        calvosList[1].movements.up = true
        calvosList[1].movements.down = false
    },
    "ArrowDown":() => {
        calvosList[1].movements.down = true
        calvosList[1].movements.up = false
    },
    "v":() => calvosList[0].atack01(),
    "b":() => calvosList[0].atack02(),
    "1":() => calvosList[1].atack01(),
    "3":() => calvosList[1].atack02()
}
const keysUp = {
    "w":() => calvosList[0].movements.up = false,
    "s":() => calvosList[0].movements.down = false,
    "a":() => calvosList[0].movements.left = false,
    "d":() => calvosList[0].movements.right = false,
    "ArrowRight":() => calvosList[1].movements.right = false,
    "ArrowLeft":() => calvosList[1].movements.left = false,
    "ArrowUp":() => calvosList[1].movements.up = false,
    "ArrowDown":() => calvosList[1].movements.down = false
}
window.document.addEventListener("keydown", function(event){
    const key = event.key
    if(keysDown[key]){
        keysDown[key]()
    }
})
window.document.addEventListener("keyup", function(event){
    const key = event.key
    if(keysUp[key]){
        keysUp[key]()
    }
})