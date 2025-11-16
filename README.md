🚀 Contador de Cliques — Projeto Final DevStart / SENAI
<p align="center"> <img src="https://img.shields.io/badge/STATUS-CONCLUÍDO-4CAF50?style=for-the-badge" /> <img src="https://img.shields.io/badge/REACT-18.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" /> <img src="https://img.shields.io/badge/JAVASCRIPT-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/LICENÇA-MIT-blue?style=for-the-badge" /> </p>

Este repositório contém o projeto desenvolvido como atividade final do programa DevStart – SENAI, módulo de Desenvolvimento Front-End com React.

🔗 https://devstart.tech/

O objetivo é demonstrar domínio dos fundamentos do React, incluindo Hooks, gerenciamento de estado, componentização e eventos.

📌 Descrição do Projeto

Este projeto consiste em uma aplicação React simples que implementa um contador de cliques.

Toda vez que o botão é clicado, o valor exibido na tela é incrementado, demonstrando o fluxo básico de reatividade do React:

👉 Estado inicial → Renderização → Evento → Atualização de estado → Re-renderização

Um exercício ideal para reforçar lógica, componentização, modularidade e boas práticas no React.

🎯 Objetivos do Exercício

Criar um componente funcional chamado Contador

Utilizar o Hook useState para manipular estado

Atualizar o valor exibido dinamicamente

Aplicar evento onClick para incremento

Estruturar o projeto utilizando Create React App

Demonstrar conhecimento básico e sólido de React

🚀 Tecnologias Utilizadas

⚛️ React.js

🟨 JavaScript ES6+

📦 Create React App

🟦 Node.js

🌐 HTML5

🎨 CSS3

🧩 Funcionalidade Principal

✔️ Exibe o valor atual do contador
✔️ Incrementa o valor a cada clique
✔️ Re-renderização automática via state
✔️ Código simples, limpo e organizado

📁 Estrutura do Projeto
contador-de-cliques/
├─ src/
│  ├─ components/
│  │  └─ Contador.js     # Componente principal
│  ├─ App.js             # Componente raiz
│  ├─ index.js           # Entrada da aplicação
│  └─ index.css          # Estilos globais
│
├─ public/
│  └─ index.html         # Documento HTML principal
│
├─ package.json          # Dependências e scripts
└─ README.md             # Este arquivo

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

▶️ Como executar o projeto
🔧 Pré-requisitos

Node.js instalado

npm ou yarn instalados

🧪 Passo a passo
# Clonar o repositório
git clone https://github.com/nomedeusuario/contador-de-cliques

# Acessar a pasta
cd contador-de-cliques

# Instalar dependências
npm install

# Executar aplicação
npm start


Acesse no navegador:
👉 http://localhost:3000

📘 Aprendizados

Durante o desenvolvimento deste projeto foram reforçados:

Conceitos essenciais do Hook useState

Manipulação de eventos (onClick)

Componentização e modularidade

Organização de arquivos em projetos React

Ciclo de renderização do React

Boas práticas de código limpo

Este projeto representa a conclusão de uma etapa fundamental no aprendizado de React dentro do programa DevStart SENAI.

👨‍💻 Autor

André Felipe Pellin Bonfim
Desenvolvedor Full Stack

📧 Email: afpellin@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/afpellin/

🐙 GitHub: https://github.com/afpellin

🏫 Sobre o DevStart — SENAI

O DevStart é um programa educacional do SENAI focado em capacitação prática para desenvolvimento de software.

🔗 https://devstart.tech/
