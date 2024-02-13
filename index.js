const perguntas = [
    {
      pergunta: "Qual destes métodos é utilizado para adicionar um elemento ao final de um array?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes símbolos é utilizado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/*",
        "*/",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama o operador de igualdade restrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é utilizada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFixed()",
        "parseFloat()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é utilizado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "shift()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destas estruturas de controle é utilizada para repetições em JavaScript?",
      respostas: [
        "if-else",
        "switch",
        "for",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é utilizada para encontrar o índice de um elemento em um array em JavaScript?",
      respostas: [
        "indexOf()",
        "findIndex()",
        "search()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '10' + 10 em JavaScript?",
      respostas: [
        "20",
        "1010",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "Qual desses métodos é utilizado para concatenar dois ou mais arrays em JavaScript?",
      respostas: [
        "concat()",
        "join()",
        "slice()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas){
  const quizzItem = template.content.cloneNode(true)
  
  
  //Modifica para a pergunta
  quizzItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
  const dt = quizzItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  const estaCorreta = event.target.value == item.correta
  
  corretas.delete(item)
  if(estaCorreta){
    corretas.add(item)
    }
  
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  } 
  
  quizzItem.querySelector('dl').appendChild(dt)
  }
  
  //para remover a primeira resposta (deletar um elemento)
  quizzItem.querySelector('dl dt').remove()
  
  //colocar a pergunta na tela
  quiz.appendChild(quizzItem)
  }
