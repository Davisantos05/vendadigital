document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar").value;

    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    alert(`Cadastro realizado com sucesso, ${nome}! (Simulado)`);
    
    // Redireciona para a página inicial após o cadastro
    window.location.href = "index.html";
});
const produtos = {
    ebook: {
        titulo: "E-book Poder da Mente",
        imagem: "ebook.png",
        descricao: "Um guia completo para desbloquear o poder da sua mente e transformar sua vida.",
        preco: "R$29,90"
    },
    curso: {
        titulo: "Curso Online de Marketing",
        imagem: "curso-online.png",
        descricao: "Aprenda as estratégias mais atuais para alavancar suas vendas e seu negócio.",
        preco: "R$199,90"
    },
    template: {
        titulo: "Template Website Profissional",
        imagem: "template-web.png",
        descricao: "Modelo moderno e responsivo para seu site profissional ou loja digital.",
        preco: "R$79,90"
    }
};

function abrirModal(produtoId) {
    const produto = produtos[produtoId];
    if (!produto) return;

    document.getElementById("modalTitulo").textContent = produto.titulo;
    document.getElementById("modalImagem").src = produto.imagem;
    document.getElementById("modalImagem").alt = produto.titulo;
    document.getElementById("modalDescricao").textContent = produto.descricao;
    document.getElementById("modalPreco").textContent = produto.preco;

    document.getElementById("modalProduto").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalProduto").style.display = "none";
}

function finalizarCompra() {
    alert("Função de pagamento não implementada ainda. Em breve!");
    fecharModal();
}

// Fecha o modal se clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("modalProduto");
    if (event.target === modal) {
        fecharModal();
    }
}
function toggleTexto(id, botao) {
    const texto = document.getElementById(id);
    if (texto.style.display === "inline") {
        texto.style.display = "none";
        botao.textContent = "Saiba mais";
    } else {
        texto.style.display = "inline";
        botao.textContent = "Mostrar menos";
    }
}

function abrirModal(produto) {
    const modal = document.getElementById("modalProduto");
    const titulo = document.getElementById("modalTitulo");
    const imagem = document.getElementById("modalImagem");
    const descricao = document.getElementById("modalDescricao");
    const preco = document.getElementById("modalPreco");

    if (produto === "ebook") {
        titulo.textContent = "E-book Poder da Mente";
        imagem.src = "ebook.png";
        descricao.textContent = "Este e-book oferece técnicas práticas para usar a mente a seu favor.";
        preco.textContent = "R$29,90";
    } else if (produto === "curso") {
        titulo.textContent = "Curso Online de Marketing";
        imagem.src = "curso-online.png";
        descricao.textContent = "Curso completo de marketing digital com estratégias atualizadas.";
        preco.textContent = "R$199,90";
    } else if (produto === "template") {
        titulo.textContent = "Template Website Profissional";
        imagem.src = "template-web.png";
        descricao.textContent = "Layout moderno e responsivo pronto para usar.";
        preco.textContent = "R$79,90";
    }

    modal.style.display = "block";
}

function fecharModal() {
    document.getElementById("modalProduto").style.display = "none";
}

function finalizarCompra() {
    alert("Pagamento iniciado! Em breve você será redirecionado.");
}
function toggleTexto(id, botao) {
    const texto = document.getElementById(id);
    if (texto.style.display === "inline") {
        texto.style.display = "none";
        botao.textContent = "Saiba mais";
    } else {
        texto.style.display = "inline";
        botao.textContent = "Mostrar menos";
    }
}
