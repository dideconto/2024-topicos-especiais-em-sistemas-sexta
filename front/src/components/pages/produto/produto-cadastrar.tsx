import { useState } from "react";
import { Produto } from "../../../models/Produto";
import { useNavigate } from "react-router-dom";

function ProdutoCadastrar() {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");

    function cadastrarProduto(e: any) {

        const produto: Produto = {
            nome: nome,
            descricao: "Alimento",
            valor: 20,
            quantidade: 500
        };

        //FETCH ou AXIOS
        fetch("http://localhost:5225/api/produto/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(produto)
            })
            .then((resposta) =>
                resposta.json()
            )
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
                <input type="text"
                    placeholder="Digite o nome"
                    onChange={(e: any) =>
                        setNome(e.target.value)}
                    required />
                <br />
                <label>Descricao:</label>
                <input type="text"
                    placeholder="Digite o descrição"
                    onChange={(e: any) =>
                        setNome(e.target.value)}
                />

                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default ProdutoCadastrar;