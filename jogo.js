class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""
        switch(this.tipo){
            case "mago":
            ataque = "magia"
            break

            case "guerreiro":
            ataque = "espada"
            break

            
            case "monge":
            ataque = "artes marciais"
            break


            case "ninja":
            ataque = "shuriken"
            break
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let ninja = new Heroi("Julio",26,"ninja")
let mago = new Heroi("Joao",30,"mago")
let monge = new Heroi("Raphael",45,"monge")
let guerreiro = new Heroi("Frank",98,"guerreiro")

ninja.atacar()
mago.atacar()
monge.atacar()
guerreiro.atacar()