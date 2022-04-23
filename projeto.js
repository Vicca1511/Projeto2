let prompt = require("prompt-sync")();
let continuar = "sim";
let vitoriasUser;
let vitoriasCpu;
const escolhas = ["Pedra", "Papel ", "Tesoura"];
while (continuar == "sim") {
  vitoriasUser = 0;
  vitoriasCpu = 0;
  console.log("JoKenPo!");
  console.log("Quantas rodadas você deseja jogar ?");
  let rodadas = +prompt(": ");
  console.log(`Teremos ${rodadas} rodadas , que vença o melhor !`);

  for (i = 0; i < rodadas; i++) {
    let escolhaUser =
      escolhas[
        +prompt("Escolha entre 0 (PEDRA) , 1 (PAPEL) ou 2 (TESOURA) : ")
      ];
    let computador = escolhas[Math.floor(Math.random() * 3)];
    console.log(computador);
    while (
      escolhaUser !== escolhas[0] &&
      escolhaUser !== escolhas[1] &&
      escolhaUser !== escolhas[2]
    ) {
      console.log("Escolha inexistente , só serão aceitas opções válidas!");
      console.log(`Escolha uma das opções disponiveis: ${escolhas}`);
      escolhaUser = escolhas[+prompt(": ")];
    }
    if (
      escolhaUser == escolhas[0] ||
      escolhaUser == escolhas[1] ||
      escolhaUser == escolhas[2]
    ) {
      console.log();
    }
    if (
      (escolhaUser == escolhas[0] && computador == escolhas[2]) ||
      (escolhaUser == escolhas[1] && computador == escolhas[0]) ||
      (escolhaUser == escolhas[2] && computador == escolhas[1])
    ) {
      console.log(`Você jogou ${escolhaUser}`);
      console.log(`Computador jogou ${computador}`);
      console.log("Você VENCEU!");
      vitoriasUser++;
    } else if (
      (escolhaUser == escolhas[0] && computador == escolhas[1]) ||
      (escolhaUser == escolhas[1] && computador == escolhas[2]) ||
      (escolhaUser == escolhas[2] && computador == escolhas[0])
    ) {
      console.log(`Você jogou ${escolhaUser}`);
      console.log(`Computador jogou ${computador}`);
      console.log("Você PERDEU!");
      vitoriasCpu++;
    } else {
      (escolhaUser == escolhas[0] && computador == escolhas[0]) ||
        (escolhaUser == escolhas[1] && computador == escolhas[1]) ||
        (escolhaUser == escolhas[2] && computador == escolhas[2]);
      console.log(`Você jogou ${escolhaUser}`);
      console.log(`Computador jogou ${computador}`);
      console.log("EMPATE.");
    }
    console.log(`Você fez ${vitoriasUser} pontos.`);
    console.log(`O Computador fez ${vitoriasCpu} pontos`);
  }
  if (vitoriasCpu < vitoriasUser) {
    console.log(
      `O vencedor do jogo com ${vitoriasUser} vitórias,  é o usuário!`
    );
  } else if (vitoriasCpu > vitoriasUser) {
    console.log(
      `O vencedor do jogo com ${vitoriasCpu} vitórias,  é o computador!`
    );
  } else if (vitoriasCpu == vitoriasUser) {
    console.log(`Não tivemos um vencedor , o jogo EMPATOU!`);
  }
  console.log("Responda apenas com sim ou nao .");
  continuar = prompt("Deseja jogar novamente? ");

  while (continuar.toLowerCase() !== "sim") {
    if (continuar.toLowerCase() == "nao") {
      console.log("Obrigado pelo jogo, volte sempre!");
      break;
    } else {
      console.log("Responda apenas com sim ou nao!");
      continuar = prompt("Deseja jogar novamente? ");
    }
    continue;
  }
}
