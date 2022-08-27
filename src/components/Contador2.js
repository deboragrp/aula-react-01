import React, { useState } from "react";

export default function Contador() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <button> Contador = {num}</button> <br /> <br />
      <button className="button1" onClick={() => setNum(num + 5)}>
        Somar 5
      </button>
      <button className="button2" onClick={() => setNum(num - 3)}>
        Subtrair 3
      </button>
      <br /> <br />
      <button className="button3" onClick={() => setNum(0)}>
        Zerar
      </button>
    </div>
  );
}
