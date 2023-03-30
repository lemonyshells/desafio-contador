# Projeto - Contador

O intuito desse projeto é de fornecer conceitos básicos sobre o uso de JavaScript e suas interações com uma página HTML.
Esse desafio foi passado no Basecamp Javascript da [DIO.me](https://web.dio.me/home).

### HTML e CSS

- Os códigos HTML e CSS desse projeto foram tirados do repositório da expert da aula, [Stephany Nusch](https://github.com/stebsnusch/basecamp-javascript/tree/main/introducao-ao-javascript/contador), sendo o foco do aprendizado desse projeto o JavaScript.

### JavaScript

- O código inicial (abaixo) foi feito durante a aula e os incrementos do código vieram de pesquisas na internet, nos sites listados nas referências desse projeto.

  ```
  var currentNumberWrapper = document.getElementById('currentNumber')
  var currentNumber = 0;
  
  function increment() {
      currentNumber = currentNumber + 1;
      currentNumberWrapper.innerHTML = currentNumber;
  }
  
  function decrement() {
      currentNumber = currentNumber - 1;
      currentNumberWrapper.innerHTML = currentNumber;
  }
  ```

- O desafio sugeria substituir a função HTML `onclick()` (que foi retirado do código HTML) pela função JavaScript `addEventListener()`. Após pesquisa (linkados nas referências) o código foi feito da seguinte maneira:

  ```
  subtrair.addEventListener("click", decrement) ;
  adicionar.addEventListener("click", increment) ;
  ```

- Para que a cor do número mudasse para vermelho se negativo, foi utilizada a função if/else dentro das funções de increment/decrement. O resultado final foi o abaixo:

  `const displayObj = document.getElementById("currentNumber");`

  ```
  var currentNumber = 0;
  
  function increment() {
  
   currentNumber = currentNumber + 1;
  
   if (currentNumber < 0) {
  
    displayObj.style.color = "red";
  
   } else {
  
    displayObj.style.color = "black";
  
   }
  
   displayObj.innerHTML = currentNumber;
  
  }
  
  function decrement() {
  
   currentNumber = currentNumber - 1;
  
   if (currentNumber < 0) {
  
    displayObj.style.color = "red";
  
   } else {
  
    displayObj.style.color = "black";
  
   }
  
   displayObj.innerHTML = currentNumber;
  
  }
  
  subtrair.addEventListener("click", decrement);
  
  adicionar.addEventListener("click", increment);
  ```

  

  ### Referências

  - [O método addEventListener() – exemplo de código com listener de eventos em JavaScript](https://www.freecodecamp.org/portuguese/news/o-metodo-addeventlistener-exemplo-de-codigo-com-listener-de-eventos-em-javascript/)

  - [Stack Overflow Forum](https://stackoverflow.com/questions/46380595/replacing-onclick-with-addeventlistener)

  - [JavaScript if...else](w3schools.com/jsref/jsref_if.asp#:~:text=The%20if%2Felse%20statement%20executes,actions%20based%20on%20different%20conditions.)

    

