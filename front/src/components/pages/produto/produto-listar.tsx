import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoListar() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        carregarProdutos();
    }, []);

    function carregarProdutos() {
        //FETCH ou AXIOS
        fetch("http://localhost:5225/api/produto/listar")
            .then((resposta) =>
                resposta.json()
            )
            .then((produtos: Produto[]) => {
                console.table(produtos);
                setProdutos(produtos);
            });
    }

    function cadastrarProdutos() {
        const produto : Produto = {
            nome : "Feijão",
            descricao : "Alimento",
            valor : 20,
            quantidade: 500
        };

        //FETCH ou AXIOS
        fetch("http://localhost:5225/api/produto/cadastrar",
        {
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        })
            .then((resposta) =>
                resposta.json()
            )
            .then((produto: Produto) => {
                console.log(produto);
            });
    }

    return (
        <div>
            <h1>Listar Produtos</h1>
            <button onClick={cadastrarProdutos}>Cadastrar</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Criado Em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProdutoListar;