
---

# Frontend Mentor - Rock, Paper, Scissors solution

Esta é uma solução para o [desafio Rock, Paper, Scissors no Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Os usuários devem ser capazes de:

- Ver o layout ideal do jogo dependendo do tamanho da tela do dispositivo
- Jogar Pedra, Papel, Tesoura contra o computador
- Manter o estado da pontuação após atualizar o navegador _(opcional)_
- **Bônus**: Jogar Pedra, Papel, Tesoura, Lagarto, Spock contra o computador _(opcional)_

### Screenshot

![](./screenshot.jpg)

**Nota**: Não se esqueça de substituir ou adicionar sua própria captura de tela aqui, se necessário.

### Links

- Solution URL: https://vercel.com/analuizazzzs-projects/rock-paper-scissors-game

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - Biblioteca JS
- [Next.js](https://nextjs.org/) - Framework para React
- [Styled Components](https://styled-components.com/) - Para estilos

### What I learned

Durante o desenvolvimento deste projeto, aprendi a:

1. Trabalhar com **Hooks** no React, especialmente `useState` para controlar o estado do jogo e `useEffect` para persistir a pontuação no navegador.
2. Utilizar **Styled Components** para gerenciar estilos de forma modular e reutilizável.
3. Implementar a lógica do jogo de forma eficiente, manipulando as opções do jogador e do computador e exibindo o resultado da partida corretamente.

Exemplo de código onde aprendi mais sobre os hooks em React:

```js
 const [score, setScore] = useState(12);
    const [userChoice, setUserChoice] = useState(null);
    const [houseChoice, setHouseChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [showRules, setShowRules] = useState(false)

    function handleChoice(choice) {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setHouseChoice(randomChoice);
    }

    function determineWinner() {
        if (!userChoice || !houseChoice) return;
        if (userChoice === houseChoice) {
            setResult("Draw");
        } else if (
            (userChoice === "rock" && houseChoice === "scissors") ||
            (userChoice === "scissors" && houseChoice === "paper") ||
            (userChoice === "paper" && houseChoice === "rock")
        ) {
            setResult("You Win");
            setScore(score + 1);
        } else {
            setResult("You Lose");
            setScore(score - 1);
        }
    }
```

### Continued development

Ainda quero melhorar as minhas habilidades em:

1. **Testes automatizados**: Experimentar com ferramentas como Jest para testar os componentes React e garantir que as funções de lógica do jogo funcionem conforme o esperado.
2. **Otimização do desempenho**: Explorar maneiras de melhorar a renderização dos componentes para dispositivos móveis de baixo desempenho.
3. **Adição de animações**: Criar animações mais dinâmicas e interativas para melhorar a experiência do usuário.

### Useful resources

- [Documentação oficial do React](https://reactjs.org/docs/getting-started.html) - Foi fundamental para entender os hooks e como gerenciar o estado da aplicação.
- [Styled Components Documentation](https://styled-components.com/docs) - Para entender melhor como estilizar de forma modular em React.
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - Ajudou a melhorar o layout da página utilizando o CSS Grid.

## Author

- Website - [Seu Nome](https://www.seu-site.com)
- Frontend Mentor - [@seuusername](https://www.frontendmentor.io/profile/seuusername)
- Twitter - [@seuusername](https://www.twitter.com/seuusername)

## Acknowledgments

Gostaria de agradecer a [Frontend Mentor](https://www.frontendmentor.io/) pela ótima plataforma e pelo desafio incrível. Também gostaria de reconhecer as contribuições de membros da comunidade, cujos comentários e feedbacks me ajudaram a aprimorar o projeto.

---

Esse é um README completo, adequado para um projeto em React! Se precisar de mais ajustes ou informações, posso ajudar!
