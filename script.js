function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}   
console.log(validateEmail('texto@texto.com')); // true
console.log(validateEmail('texto@texto')); // false
console.log(validateEmail('texto.com')); // false
console.log(validateEmail('texto')); // false;

function myFunction() {
    alert("Cadastro realizado com sucesso!")
  }