class CalvoTop extends Calvo{
    constructor({team, position}){
        super({
            position:position,
            size:{
                width:50,
                height:50
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
            size:{
                width:6,
                height:25
            }
            
        }
        this.isAttacking = [false, false]
        this.att = false
        this.angle = 0
        this.image = new Image()
        this.addSprites()
        this.currentSprite = 0
        this.animation = "idle"
    }
    addSprites(){
        this.sprites = {
            idle:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/idle.png",
                sprites:[
                    {
                        cut:{
                            x:0,
                            y:0
                        },
                        cutSize:{
                            x:90,
                            y:85
                        }
                    },
                    {
                        cut:{
                            x:90,
                            y:0
                        },
                        cutSize:{
                            x:90,
                            y:90
                        }
                    },
                    {
                        cut:{
                            x:0,
                            y:90
                        },
                        cutSize:{
                            x:90,
                            y:85
                        }
                    },
                    {
                        cut:{
                            x:90,
                            y:90
                        },
                        cutSize:{
                            x:90,
                            y:85
                        }
                    }
                ]
            },
            jump:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/jump.png",
                calculate(player){
                    if(player.velocity.y < 0){
                        player.currentSprite = 0
                    }
                    else{
                        player.currentSprite = 1
                    }
                },
                sprites:[
                    {
                        cut:{
                            x:0,
                            y:0
                        },
                        cutSize:{
                            x:30,
                            y:40
                        }
                    },
                    {
                        cut:{
                            x:0,
                            y:42
                        },
                        cutSize:{
                            x:30,
                            y:40
                        }
                    }
                ]
            },
            run:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/run.png",
                sprites:[
                    {
                        cut:{
                            x:10,
                            y:0
                        },
                        cutSize:{
                            x:68,
                            y:89
                        }
                    },
                    {
                        cut:{
                            x:95,
                            y:0
                        },
                        cutSize:{
                            x:85,
                            y:89
                        }
                    }
                ],
                calculate:function(player){
                    if(player.velocity.x < 0){
                        player.currentSprite = 1
                    }
                    else{
                        player.currentSprite = 0
                    }
                }
            },
            atack2:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/atack2.png",
                sprites:[
                    {
                        cut:{
                            x:5,
                            y:0
                        },
                        cutSize:{
                            x:34,
                            y:50
                        }
                    },
                    {
                        cut:{
                            x:42,
                            y:0
                        },
                        cutSize:{
                            x:34,
                            y:50
                        }
                    }
                ],
                calculate:function(player){
                    if(player.offset == true){
                        player.currentSprite = 0
                    }
                    else{
                        player.currentSprite = 1
                    }
                }
            },
            atack1:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/atack1.png",
                sprites:[
                    {
                        cut:{
                            x:2,
                            y:0
                        },
                        cutSize:{
                            x:36,
                            y:39
                        }
                    },
                    {
                        cut:{
                            x:2,
                            y:43
                        },
                        cutSize:{
                            x:36,
                            y:39
                        }
                    },
                    {
                        cut:{
                            x:40,
                            y:0
                        },
                        cutSize:{
                            x:36,
                            y:39
                        }
                    }
                ]
            },
            dead:{
                imageSrc:"https://parkourer00.github.io/calvo_combat/medias/images/personagens/calvotop/deads.png",
                sprites:[
                    {
                        cut:{
                            x:0,
                            y:0
                        },
                        cutSize:{
                            x:96,
                            y:96
                        }
                    }
                ]
            }
        }
    }
    animate(){
        if(this.isAlive == false){
            this.animation = "dead"
        }
        else if(this.isAttacking[1] == true){
            this.animation = "atack2"
        }
        else if(this.isAttacking[0] == true){
            this.animation = "atack1"
        }
        else if(this.fly){
            this.animation = "jump"
        }
        else if(this.velocity.x != 0){
            this.animation = "run"
        }
        else{
            this.animation = "idle"
        }
        if(this.sprites[this.animation].calculate){
            this.sprites[this.animation].calculate(this)
        }
        else{
            this.currentSprite+= 0.2
            if(this.currentSprite >= this.sprites[this.animation].sprites.length){
                this.currentSprite = 0
            }
        }
        
        ctx.drawImage(
            this.image,
            this.sprites[this.animation].sprites[Math.floor(this.currentSprite)].cut.x,
            this.sprites[this.animation].sprites[Math.floor(this.currentSprite)].cut.y,
            this.sprites[this.animation].sprites[Math.floor(this.currentSprite)].cutSize.x,
            this.sprites[this.animation].sprites[Math.floor(this.currentSprite)].cutSize.y,
            this.position.x,
            this.position.y, 
            this.size.width,
            this.size.height
        )
    }
    draw(){
        this.image.src = this.sprites[this.animation].imageSrc
        ctx.fillStyle = this.color
        if(this.rotate == true){
            if(this.angle == 5){
                this.angle -= 2
            }
            this.angle += 1
            ctx.rotate(this.angle * Math.PI / 180)
            this.animate()
            ctx.rotate((360 - this.angle) * Math.PI / 180)
        }
        else{
            this.animate()
        }
        
        if(this.isAttacking[1] == true){
            if(this.team){
                this.colison(this, calvosList[1], 1)
            }
            else{
                this.colison(this, calvosList[0], 1)
            }
        }
        if(this.isAttacking[0] == true){
            ctx.fillStyle = "green"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width + this.size.width, this.attackBox.height)
            if(this.team){
                this.colison(this.attackBox, calvosList[1], 0.2)
            }
            else{
                this.colison(this.attackBox, calvosList[0], 0.2)
            }
        }
    }
    atack01(){
        if(this.isAlive == false){
            return
        }
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
        if(this.isAlive == false || this.finish == true){
            return
        }
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
