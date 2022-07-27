
emailvalidate (input)
  let re = /\S+@\S+\.\S+/;
  let email = input.value;
  let errorMessage = `Insira um e-mail no padrão stella.digo@email.com`;

  if(!re.test(email)); {
    this.printMessage(input, errorMessage);
  }

  function mensagem(params) {
    alert('Cadastro realizado com sucesso!')
    
  }