import React from "react";

export default function Carta(props) {
  return (
    <div>
      <h2>
        Olá {props.nome} - {props.estado}
      </h2>
      <p>
        Estou escrevendo essa carta por causa da <br /> atividade que os alunos
        vão fazer, okay. <br /> Não desiste, continue fazendo as atividade,
        treinando e praticando. <br /> O céu é o limite{" "}
      </p>
    </div>
  );
}
