const perguntas = [
    {
        enunciado: "Você acredita que a inteligência artificial pode melhorar a personalização do aprendizado nas escolas?",
        alternativas: [
            { texto: "Sim, pode adaptar o ensino às necessidades individuais dos alunos.", pontuacao: 7 },
            { texto: "Não, pode criar desigualdades e depender demais da tecnologia.", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Na sua opinião, é mais vantajoso usar a inteligência artificial para automatizar a correção de provas ou para fornecer feedback em tempo real durante o aprendizado?",
        alternativas: [
            { texto: "Automatizar a correção de provas, para economizar tempo dos professores.", pontuacao: 2 },
            { texto: "Fornecer feedback em tempo real, para ajudar os alunos a melhorar continuamente.", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você acha que a integração da inteligência artificial nas escolas pode reduzir a carga de trabalho dos professores?",
        alternativas: [
            { texto: "Sim, ajudando com tarefas administrativas e avaliativas.", pontuacao: 8 },
            { texto: "Não, pode adicionar complexidade e exigir novos treinamentos.", pontuacao: 3 }
        ]
    },
    {
        enunciado: "Qual é a sua opinião sobre o uso de IA para monitorar o desempenho dos alunos e identificar possíveis problemas?",
        alternativas: [
            { texto: "É uma ferramenta útil para intervenções precoces e suporte personalizado.", pontuacao: 1 },
            { texto: "É uma invasão de privacidade e pode causar estresse desnecessário nos alunos.", pontuacao: 0 }
        ]
    },
    {
        enunciado: "Você considera que a inteligência artificial pode substituir alguns aspectos do ensino tradicional nas escolas?",
        alternativas: [
            { texto: "Sim, oferecendo métodos de ensino mais inovadores e eficientes.", pontuacao: 4 },
            { texto: "Não, porque a interação humana e a experiência direta são insubstituíveis.", pontuacao: 1 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

