const form = document.getElementById('form-produto');
const tabela = document.getElementById('tabela-produtos');
const btnNovoProduto = document.getElementById('btn-novo-produto');

let produtos = [];

// Função para adicionar um novo produto na tabela
function adicionarProduto(produto) {
	const novaLinha = tabela.insertRow();
	const colunaNome = novaLinha.insertCell();
	const colunaValor = novaLinha.insertCell();
	colunaNome.innerHTML = produto.nome;
	colunaValor.innerHTML = `R$ ${produto.valor.toFixed(2)}`;
}

const formProduto = document.getElementById('form-produto');

formProduto.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const disponivel = document.getElementById('disponivel').value;

    const produto = {
        nome: nome,
        descricao: descricao,
        valor: valor,
        disponivel: disponivel
    };

    adicionarProduto(produto);
});

document.getElementById("novo-produto").addEventListener("click", limparFormulario);
function limparFormulario() {
	document.getElementById("form-produto").reset();
  }
  
  
