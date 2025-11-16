🚀 Contador de Cliques — Projeto Final DevStart / SENAI

Este repositório contém o projeto desenvolvido como atividade final do programa DevStart – SENAI
🔗 https://devstart.tech/

O objetivo deste desafio é demonstrar domínio dos fundamentos do React, incluindo:

Componentes funcionais

Hooks (useState)

Gerenciamento de estado

Manipulação de eventos

Renderização reativa

📌 Descrição do Projeto

O projeto consiste em uma aplicação React simples, limpa e funcional, que implementa um contador de cliques.

Toda vez que o botão é pressionado, o valor do contador é incrementado, demonstrando o fluxo fundamental do React:

Estado inicial → Renderização → Evento → Atualização de estado → Re-renderização

Este projeto reforça conceitos essenciais do React e demonstra boas práticas de código, modularização e semântica.

🎯 Objetivos do Exercício

✔️ Criar um componente funcional chamado Contador
✔️ Definir o estado inicial utilizando o Hook useState
✔️ Implementar uma função de incremento via onClick
✔️ Renderizar dinamicamente o valor atualizado
✔️ Estruturar um projeto React usando Create React App

🚀 Tecnologias Utilizadas

React.js

JavaScript ES6+

Create React App

Node.js

HTML5 & CSS3

🧩 Funcionalidade Principal

✔️ Exibir o valor atual do contador
✔️ Incrementar o valor a cada clique
✔️ Reatividade automática via atualização de estado
✔️ Código simples, modulado e de fácil leitura

📁 Estrutura do Projeto
contador-de-cliques/
│
├── src/
│   ├── App.js
│   ├── Contador.js
│   ├── index.js
│   └── index.css
│
├── public/
│   └── index.html
│
├── package.json
└── README.md

🧠 Código do Componente Principal (Contador.js)
import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador: {count}</h1>
      <button style={styles.button} onClick={incrementarContador}>
        Clique aqui
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "18px",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Contador;

▶️ Como Executar o Projeto
🔧 Pré-requisitos

Node.js instalado

npm ou yarn

🧪 Passo a passo
# Clonar o repositório
git clone https://github.com/nomedeusuario/contador-de-cliques

# Acessar o diretório
cd contador-de-cliques

# Instalar dependências
npm install

# Executar aplicação
npm start


A aplicação estará disponível em:
👉 http://localhost:3000

📘 Aprendizados do Projeto

Durante o desenvolvimento deste projeto foram reforçados conceitos essenciais como:

Uso do Hook useState

Manipulação de eventos (onClick)

Componentização e modularização

Estruturação de arquivos em um projeto React

Compreensão do ciclo de renderização do React

Boas práticas de clean code

Este projeto representa a conclusão de etapas fundamentais no aprendizado de React dentro do programa DevStart SENAI.

👨‍💻 Autor

André Felipe Pellin Bonfim
Desenvolvedor Full Stack

📧 E-mail: afpellin@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/afpellin/

🐙 GitHub: https://github.com/afpellin

🏫 Sobre o DevStart – SENAI

O DevStart é um programa educacional do SENAI focado na capacitação prática em desenvolvimento de software, preparando profissionais para o mercado através de projetos reais e aprendizado guiado.

Mais informações em:
🔗 https://devstart.tech/

📜 Licença

Este projeto está licenciado sob a MIT License.
