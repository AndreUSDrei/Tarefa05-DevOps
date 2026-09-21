const frases = [
    {
        texto: "Cada dia é uma nova oportunidade para recomeçar.",
        tipo: "Recomeço"
    },
    {
        texto: "A persistência transforma planos em conquistas.",
        tipo: "Persistência"
    },
    {
        texto: "Ideias simples podem criar mudanças extraordinárias.",
        tipo: "Criatividade"
    },
    {
        texto: "O melhor momento para aprender é agora.",
        tipo: "Aprendizado"
    },
    {
        texto: "Pequenos passos também levam a grandes destinos.",
        tipo: "Progresso"
    }
];

function obterFraseAleatoria(lista) {
    if (lista.length === 0) {
        return "Nenhuma frase disponível.";
    }

    const indice = Math.floor(Math.random() * lista.length);

    return lista[indice];
}

function exibirFrase() {
    const elemento = document.getElementById("frase");
    const fraseSorteada = obterFraseAleatoria(frases);

    elemento.textContent = fraseSorteada.texto;

    const linha = document.createElement("tr");
    const celulaFrase = document.createElement("td");
    const celulaTipo = document.createElement("td");

    celulaFrase.textContent = fraseSorteada.texto;
    celulaTipo.textContent = fraseSorteada.tipo;
    linha.append(celulaFrase, celulaTipo);

    document.getElementById("historico-frases").appendChild(linha);
}

if (typeof document !== "undefined") {
    const botao = document.getElementById("botao");

    botao.addEventListener("click", exibirFrase);
}

if (typeof module !== "undefined") {
    module.exports = {
        obterFraseAleatoria
    };
}