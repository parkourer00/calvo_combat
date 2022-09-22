
class Calvo{
    constructor(player, position, side){
        this.player = player
        this.side = side
        this.position = position
        this.draw()
        if(this.side){
            this.color = "red"
            this.keysFunction = {
                "w":() => this.move(x=0, y=-3),
                "s":() => this.move(x=0, y=3),
                "a":() => this.move(x=-3, y=0),
                "d":() => this.move(x=3, y=0)
            }
        }
        else{
            this.color = "blue"
            this.keysFunction = {
                "arrowUp":() => this.move(x=0, y=-3),
                "arrowDown":() => this.move(x=0, y=3),
                "arrowLeft":() => this.move(x=-3, y=0),
                "arrowRigth":() => this.move(x=3, y=0)
            }
        }
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.player.size.width, this.player.size.height)
    }
    update(){
        this.position.y += this.player.speed.y
        if(this.position.y + this.player.speed.y + this.player.size.height >=  canvas.height){
            this.player.speed.y = 0
        }
        this.draw()
    }
    moveListener(key){
        if(this.keysFunction[key]){
            this.keys[key]()
        }
    }
    move(x=0, y=0){
        //l

    }
    manual(){
        console.info(`
            PLAYER:{
                speed - velocidade:{
                    x - velocidade x
                    y - velocidade y
                }
                size - tamanho:{
                    width - altura
                    height - largura
                }
            }

            POSITION:{
            x - x
            y - y
            }

        `)
    }
}