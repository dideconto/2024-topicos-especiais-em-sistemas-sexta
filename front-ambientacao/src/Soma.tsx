
//Exibir o valor do contador no HTML
//Realizar o exercício da soma

import { useState } from "react";

function Soma() {    
    const [contador, setContador] = useState(0);
    function clicar() {
        setContador(contador + 1);
        console.log(contador);
    }
    return (
        <div>
            <h1>Componente da Soma</h1>
            <label>Número 1:</label>
            <input type="text" /><br />
            <label>Número 2:</label>
            <input type="text" /><br />
            <button onClick={clicar}>
                Calcular
            </button>
        </div>
    )
}

export default Soma;