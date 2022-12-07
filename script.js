'use strict';
let numeroSecreto = Math.trunc(Math.random() * 50) + 1;
let ranking = 0;
let placar = 15;

document.querySelector('.check').addEventListener('click', function () {
  let aposta = Number(document.querySelector('.aposta').value);
  if (!aposta) {
    document.querySelector('.mensagem').textContent =
      'Digite um número como palpite';
    document.querySelector('.mensagem').style.backgroundColor = '#39228a';
    document.querySelector('.mensagem').style.color = 'yellow';
  } else if (aposta === numeroSecreto) {
    document.querySelector('.numero').textContent = numeroSecreto;
    document.querySelector('.mensagem').textContent = 'Parabéns, Você acertou!';
    document.querySelector('body').style.backgroundColor = '#d43f65';
    document.querySelector('.numero').style.width = '300px';
    if (placar > ranking) {
      ranking = placar;
      document.querySelector('.ranking').textContent = ranking;
    }
  } else if (aposta !== numeroSecreto) {
    if (placar > 1) {
      document.querySelector('.mensagem').textContent =
        aposta > numeroSecreto ? 'Palpite mais alto' : 'Palpite mais baixo';
      placar--;
      document.querySelector('.placar').textContent = placar;
      document.querySelector('.mensagem').style.backgroundColor = '#39228a';
      document.querySelector('.mensagem').style.color = 'yellow';
    } else {
      document.querySelector('.mensagem').textContent = 'Fim de Jogo';
      document.querySelector('.mensagem').style.backgroundColor = '#39228a';
      document.querySelector('.mensagem').style.color = 'yellow';
    }
  }
});
document.querySelector('.reset').addEventListener('click', function () {
  numeroSecreto = Math.trunc(Math.random() * 50) + 1;
  placar = 15;
  document.querySelector('.mensagem').textContent = 'Preparando para iniciar!';
  document.querySelector('.mensagem').style.backgroundColor = '#0d0d35';
  document.querySelector('.mensagem').style.color = 'white';
  document.querySelector('.placar').textContent = placar;
  document.querySelector('.numero').textContent = '?';
  document.querySelector('.numero').style.width = '150px';
  document.querySelector('body').style.backgroundColor = '#0d0d35';
  document.querySelector('.aposta').value = '';
});
