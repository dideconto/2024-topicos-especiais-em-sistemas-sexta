import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { useNavigate } from "react-router-dom";

function ProdutoCadastrar() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  function cadastrarProduto(e: any) {
    const produto: Produto = {
      nome: nome,
      descricao: descricao,
      valor: parseFloat(valor),
      quantidade: parseInt(quantidade),
      categoriaId: "05bdf537-a841-4c50-8823-2e234d0bf0b0",
    };

    //FETCH ou AXIOS
    fetch("http://localhost:5225/api/produto/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => resposta.json())
      .then((produto: Produto) => {
        navigate("/pages/produto/listar");
      });
    e.preventDefault();
  }
  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={cadastrarProduto}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o nome"
          onChange={(e: any) => setNome(e.target.value)}
          required
        />
        <br />
        <label>Descricao:</label>
        <input
          type="text"
          placeholder="Digite o descrição"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Quantidade:</label>
        <input
          type="text"
          placeholder="Digite o quantidade"
          onChange={(e: any) => setQuantidade(e.target.value)}
        />
        <br />
        <label>Valor:</label>
        <input
          type="text"
          placeholder="Digite o valor"
          onChange={(e: any) => setValor(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ProdutoCadastrar;
