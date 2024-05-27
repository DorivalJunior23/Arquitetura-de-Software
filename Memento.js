//Dorival Junior
class Jogador {
    constructor() {
        this.posicao = { x: 0, y: 0 };
    }

    mover(x, y) {
        this.posicao.x += x;
        this.posicao.y += y;
    }

    salvarEstado() {
        return new Memento(this.posicao);
    }

    restaurarEstado(memento) {
        this.posicao = memento.getEstado();
    }

    getPosicao() {
        return this.posicao;
    }
}
class Memento {
    constructor(estado) {
        this.estado = { ...estado };
    }

    getEstado() {
        return this.estado;
    }
}
class Cuidador {
    constructor() {
        this.mementos = [];
    }

    adicionarMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}
// Criação das instâncias
const jogador = new Jogador();
const cuidador = new Cuidador();

// Movendo o jogador e salvando o estado
jogador.mover(1, 1);
cuidador.adicionarMemento(jogador.salvarEstado());

jogador.mover(2, 2);
cuidador.adicionarMemento(jogador.salvarEstado());

console.log(jogador.getPosicao()); // { x: 3, y: 3 }

// Restaurando um estado anterior
jogador.restaurarEstado(cuidador.getMemento(0));
console.log(jogador.getPosicao()); // { x: 1, y: 1 }
