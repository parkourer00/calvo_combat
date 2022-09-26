class CalvoTop extends Calvo{
    constructor({team, position}){
        super({
            position:position,
            size:{
                width:25,
                height:75
            },
            team:team,
            velocity:{
                x:0,
                y:0
            },
            speed:{
                x:1.5,
                y:6
            },
            rotate:false,
            life:100
        })
        this.atack = ""
        this.attackBox = {
            position:this.position,
            width:15,
            height:50
        }
        this.isAttacking = [false, false]
        this.att = false
        this.angle = 0
    }
    draw(){
        ctx.fillStyle = this.color
        if(this.rotate == true){
            if(this.angle == 5){
                this.angle -= 2
            }
            this.angle += 1
            ctx.rotate(this.angle * Math.PI / 180)
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
            ctx.rotate((360 - this.angle) * Math.PI / 180)
        }
        else{
            ctx.fillRect(this.position.x, this.position.y, this.size.width, this.size.height)
        }
        
        if(this.isAttacking[0] == true){
            ctx.fillStyle = "green"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width + this.size.width, this.attackBox.height)
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width * -1, this.attackBox.height)
        }
    }
    atack01(){
        if(this.att){
            return
        }
        this.att = true
        console.log("ok")
        this.isAttacking[0] = true
        setTimeout(() => {
            this.isAttacking[0] = false
        },500)
        setTimeout(() => {
            this.att = false
        },1000)
    }
    atack02(){
        if(this.att){
            return
        }
        this.att = true
        this.rotate = true
        this.isAttacking[1] = true
        console.log("ok2")
        this.velocity.x = 10 * this.offset
        setTimeout(() => {
            this.isAttacking[1] = false
            this.rotate = false
        },500)
        setTimeout(() => {
            this.att = false
        },2000)
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
            this.velocity.x = this.speed.x
            this.offset = 1
        }
        else if(this.isAttacking[1] == false){
            this.velocity.x = 0
        }
    }
}
