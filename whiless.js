/* Criar uma variável que será equivalente as chances que o usuário terá para fazer Login
   Se errar
   Boas vindas ao usuário;
  Criar uma variável para receber o nome do usuário;
  Informar para fazer o cadastro para Login no sistema

  Criar uma variável para receber o nome de usuário do usuário;
  Criar uma variável para receber a senha do usuário;
  
  Criar uma variável para receber o nome de usuário criado para Login;
  Criar uma variável para receber a senha criada pelo usuário para Login;
  Se a senha digitado for == a senha que o usuário criou Logar
  Se não, enquanto a senha digitada for diferente da senha criada o usuário tem mais uma 
  chance para acertar a senha,
  se o usuário acertar a senha na segunda tentativa fechar o loopin e Logar
  Se não, se errar de novo sair do Looping e não logar
*/
//Nome de usuário e informação para criar o cadastro para Login

var chances = 1;
alert(`Seja bem vindo ao sistema de Login Bacana!`);
var nomeUsuario = prompt(`Digite o seu nome`);
alert(`${nomeUsuario}, agora vamos para a criação da conta para o Login`);

//Recebendo o nome de usuário e senha para a criação do cadastro para Login

var nomeDeUsuario = prompt(`Crie um nome de usuário`);
var senhaDoUsuario = prompt(`Cire uma senha:`);

//Logar no sistema

var nomeDoUsuarioPrompt = prompt(`Digite seu nome de usuário para fazer Login:`);
var senhaDoUsuarioPrompt = prompt(`Digite sua senha para fazer Login:`);

//Lógica para fazer Login

if(senhaDoUsuarioPrompt == senhaDoUsuario){
  console.log(`Usuário conectado ao sistema`);
  alert(`Você está conectado ao sistema!`);
}
else{
  while(senhaDoUsuarioPrompt != senhaDoUsuario, chances < 2){
    senhaDoUsuarioPrompt = prompt(`Você tem mais uma tentativa para logar no sistema:`);
    if(senhaDoUsuarioPrompt == senhaDoUsuario){
      alert(`Você está conectado ao sistema!`);
      console.log(`O usuário ${nomeUsuario}, está conectado ao sistema após
      concertar o erro da senha!`);
      ++chances;
    }
    else{
      alert(`Você errou novamente a senha, ${nomeUsuario} você não tem acesso ao sistema!`);
      ++chances;
    }
  }
}







