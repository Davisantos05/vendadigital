// ===================
// FORMULÁRIO DE CADASTRO
// ===================
const formCadastro = document.getElementById("formCadastro");
if (formCadastro) {
    formCadastro.addEventListener("submit", function(e) {
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
        window.location.href = "index.html";
    });
}

// ===================
// OBJETO DE PRODUTOS
// ===================
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

// ===================
// MODAL DE PRODUTO
// ===================
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
    alert("Pagamento iniciado! Em breve você será redirecionado.");
    fecharModal();
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("modalProduto");
    if (event.target === modal) {
        fecharModal();
    }
};

// ===================
// SAIBA MAIS / MOSTRAR MENOS
// ===================
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

// ===================
// BOTÃO VOLTAR AO TOPO
// ===================
const btnTopo = document.getElementById("btnTopo");
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================
// TEXTO AO PASSAR O MOUSE SOBRE "PRODUTOS"
// ===================
const menuProdutos = document.getElementById("menuProdutos");
const textoProdutos = document.getElementById("textoProdutos");

if (menuProdutos && textoProdutos) {
    menuProdutos.addEventListener("mouseenter", () => {
        textoProdutos.style.display = "block";
    });

    menuProdutos.addEventListener("mouseleave", () => {
        textoProdutos.style.display = "none";
    });
}
