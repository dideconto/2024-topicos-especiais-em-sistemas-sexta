import { useEffect, useState } from "react";

//EXERCÍCIOS
//1 - Consultar os produtos da API (CORS)
//2 - Exibir no HTML uma lista de produtos

function CepConsultar() {
    const[rua, setRua] = useState("");

    //Evento de carregamento do componente
    useEffect(() => {

        console.log("o componente carregou...");

        //FETCH ou AXIOS
        fetch("https://viacep.com.br/ws/81280330/json/")
            .then((resposta) =>                 
                resposta.json()
            )
            .then((cep) => {
                console.log(cep.logradouro);
                setRua(cep.logradouro);
            });
    }, []);

    return (
        <div>
            <h1>Consultar CEP</h1>
            <p>
                { rua }
            </p>
        </div>
    )
}

export default CepConsultar;