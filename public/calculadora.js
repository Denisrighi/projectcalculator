// recebe o valor do elemento clicado e reescreve o elemento resultado com o novo valor
function insert(num) {
  // declara uma variavel que recebe o conteúdo do elemento html que é o 'id resultado'
  var numero = document.getElementById("resultado").innerHTML;
  // o conteúdo do 'id resultado' é definido com a concatenação com o resultado anterior + o valor clicado
  document.getElementById("resultado").innerHTML = numero + num;
}
// limpa o valor do elemento do 'id resultado'
function clean() {
  // obtém o conteúdo do html 'id resultado' e atribui o novo valor que é uma string vazia
  document.getElementById("resultado").innerHTML = "";
}
// serve para apagar o último digito do elemento 'id resultado'
function back() {
  // declara uma variável que recebe o conteúdo do elemento html 'id resultado'
  var resultado = document.getElementById("resultado").innerHTML;
  // obtém o conteúdo do elemento html 'id resultado' e vai atribuir um novo valor.
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1);
}

// calcula o valor do elemento html 'id resultado'
function calcular() {
  // declara uma variável que recebe o conteúdo do elemento html 'id resultado'
  var resultado = document.getElementById("resultado").innerHTML;
// se a condição/variável executada for verdadeira
  if (resultado) {
// obtém o contéudo do elemento html 'id resultado' como verdadeiro e vai atribuir a função Eval que calcula e executa e retorna o valor da variável resultado no elemento html 'id resultado
    document.getElementById("resultado").innerHTML = eval(resultado);
// se a condição/variável for falsa, irá executar
  } else {
    // obtém o contéudo do elemento html 'id resultado' como falso e atribui o valor que está sendo passado na string
    document.getElementById("resultado").innerHTML = "xxxxxxxxxxx";
  }
}
