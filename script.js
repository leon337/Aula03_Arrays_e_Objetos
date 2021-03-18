// AQUI EU DIGO O QUE MEU SCRIPT VAI FAZER QUANDO OS ELEMENTOS FOREM TOTALMENTE CARREGADOS
window.onload = function(){
// AQUI É UM ARRAY INICIO
const usuarios = [];
usuarios[1] = 'Leandro';
usuarios[2] = 'Carlos';
usuarios[3] = 'Silva';
// AQUI É UM ARRAY FIM
// AQUI EU IMPRIMO NO CONSOLE 
  console.log(usuarios[2]);
// AQUI EU MOSTRO UM ALERTA NA TELA
  alert(usuarios[3]);

// AQUI EU ESTOU CRIANDO UM OBJETO JAVASCRIPT
  const planos = {};
// AQUI ESTOU DEFININDO OS VALORES QUE MEU OBJETO TEM
  planos.valor = 50;
  planos.mega = 25;
  planos.nome = [];

  planos.nome[0] = 'ouro';
  planos.nome[1] = 'prata';
  planos.nome[2] = 'bronze';


// AQUI EU VOU EMITIR UM ALERTA NA MINHA TELA INFORMANDO QUAL O MEU PLANO

alert('Seu plano é o : ' + planos.nome[2]);
  


}