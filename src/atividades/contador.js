import React, { useState } from "react";
import "../App.css";

function Contador() {
  // let numero = 0;

  const [numero, setNumero] = useState(0);

  function decremento() {
    setNumero(numero - 1);
  }
  function incremento() {
    setNumero(numero + 1);
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>Você clicou {numero} vezes!</p>
      <button onClick={decremento}>Decremento</button>
      <button onClick={incremento}>Incremento</button>
    </div>
  );
}

export default Contador;
