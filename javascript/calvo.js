const gravity = 0.2
class Calvo {
    constructor({position, size, team, velocity, speed, rotate, life}){
        this.velocity = velocity
        this.life = life
        this.speed = speed
        this.team =  team
        this.size = size
        this.position = position
        this.offset = 1
        this.movements = {
            up:false,
            down:false,
            right:false,
            left:false 
        }
        if(this.team){
            this.color = "red"
        }
        else{
            this.color = "blue"
        }
        this.cls = false
        this.rotate = rotate
    }
    draw(){
        ctx.fillStyle = this.color
        if(this.rotate){
            ctx.rotate(45 * Math.PI / 180)
        }
        ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        ctx.rotate(0)
    }
    update(){
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        this.gravity()
        this.movement()
        this.walls()
        this.draw()
        if(this.att){
            this.atualizeLife()
        }
    }
    atualizeLife(){
        if(this.team){
            window.document.getElementById(`player2_life`).style.width = `${calvosList[1].life}%`
            window.document.getElementById(`player2_damage`).style.width = `${100 - calvosList[1].life}%`
        }
        else{
            window.document.getElementById(`player1_life`).style.width = `${calvosList[0].life}%`
            window.document.getElementById(`player1_damage`).style.width = `${100 - calvosList[0].life}%`
        }
    }
    movement(){
        if(this.movements.up && !this.fly){
            this.fly = true
            this.velocity.y = this.speed.y * -1
        }
        else if(this.movements.down && this.fly && this.position.y <= 50){
            this.velocity.y = 5 + !this.position.y
        }
        if(this.movements.left){
            this.velocity.x = this.speed.x * -1
            this.offset = -1
        }
        else if(this.movements.right){
            this.offset = 1
            this.velocity.x = this.speed.x
        }
        else{
            this.velocity.x = 0
        }
    }
    walls(){
        if(this.position.x + this.velocity.x + this.size.width >= canvas.width - 5){
            this.velocity.x = -0.5
        }
        if(this.position.x + this.velocity.x + this.size.width <= 25){
            this.velocity.x = 0.5
        }
    }
    gravity(){
        if(this.position.y + this.velocity.y + this.size.height >= canvas.height){
            this.velocity.y = 0
            this.fly = false
        }
        else this.velocity.y += gravity
    }
}