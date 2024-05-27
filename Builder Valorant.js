//Dorival Junior
// Definindo o Builder
class composicaoBuilder {
  constructor() {
    this.composicao = {};
  }

  addDuelista(duelista) {
    this.composicao.duelista = duelista;
    return this;
  }

  addSentinela(sentinela) {
    this.composicao.sentinela = sentinela;
    return this;
  }

  addIniciador(iniciador) {
    this.composicao.iniciador = iniciador;
    return this;
  }
  addControlador(controlador) {
    this.composicao.controlador = controlador;
    return this;
  }

  build() {
    return this.composicao;
  }
}

// Utilizando o Builder para construir uma comosição do jogo Valorant
const myComposicao = new composicaoBuilder()
  .addDuelista("Jett")
  .addSentinela("Cypher")
  .addIniciador(["Kay/o", "Sova"])
  .addControlador("Omen")
  .build();

console.log("Duelista:", myComposicao.duelista); // Console log para duelista (exemplo: Jett)
console.log("Sentinela:", myComposicao.sentinela); // Console log para sentinela (exemplo: Cypher)
console.log("Iniciador:", myComposicao.iniciador); // Console log para iniciador (exemplo: ['Kay/o', 'Sova'])
console.log("Controlador:", myComposicao.controlador); // Console log para controlador (exemplo: Omen)

console.log("Composição final:", myComposicao);
