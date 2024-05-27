// Dorival Junior
class Arma {
    usarArma() {
        throw new Error("Este método deve ser sobrescrito");
    }
}

class Espada extends Arma {
    usarArma() {
        console.log("Brandindo uma espada");
    }
}

class Cajado extends Arma {
    usarArma() {
        console.log("Lançando um feitiço com um cajado");
    }
}

// Abstração
class Personagem {
    constructor(arma) {
        this.arma = arma;
    }

    atacar() {
        console.log(`${this.constructor.name} ataca:`);
        this.arma.usarArma();
    }
}

class Guerreiro extends Personagem {
    constructor(arma) {
        super(arma);
    }
}

class Mago extends Personagem {
    constructor(arma) {
        super(arma);
    }
}

// Código Cliente
const espada = new Espada();
const cajado = new Cajado();

const guerreiroComEspada = new Guerreiro(espada);
const guerreiroComCajado = new Guerreiro(cajado);

const magoComEspada = new Mago(espada);
const magoComCajado = new Mago(cajado);

guerreiroComEspada.atacar();  // Output: Guerreiro ataca: Brandindo uma espada
guerreiroComCajado.atacar();  // Output: Guerreiro ataca: Lançando um feitiço com um cajado
magoComEspada.atacar();       // Output: Mago ataca: Brandindo uma espada
magoComCajado.atacar();       // Output: Mago ataca: Lançando um feitiço com um cajado
