import React from 'react';
import Soma from './Soma';

//1 - O nome do componente OBRIGATORIAMENTE deve
//começar com a primeira letra em maiúsculo
//2 - O componete DEVE ser uma função do JS/TS
//3 - O componente DEVE retornar APENAS UM elemento
//pai HTML
function App() {
  return (
    <div>
      <Soma></Soma>
    </div>
  );
}
//4 - O componente DEVE ser exportado
export default App;
