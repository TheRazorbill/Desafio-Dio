class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        if (this.tipo === "mago") {
            this.ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.ataque = "espada";
        } else if (this.tipo === "monge") {
            this.ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            this.ataque = "shuriken";
        } else {
            this.ataque = "um ataque básico";
        }
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let heroi1 = new Heroi("Tobias", 20, "mago");
heroi1.atacar();