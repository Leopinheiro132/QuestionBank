import { useState } from "react";

const Questao = ({ id, pergunta, alternativas }) => {
  const [resposta, setResposta] = useState(null);

  const handleRadioChange = (e) => {
    setResposta(e.target.value);
  };

  return (
    <div>
      <p>{pergunta}</p>
      <div>
        {alternativas.map((alt) => (
          <div key={alt.texto}>
            <input
              type="radio"
              id={alt.texto}
              name={`resposta-${id}`}
              value={alt.texto}
              onChange={handleRadioChange}
              disabled={resposta !== null}
            />
            <label htmlFor={alt.texto}>{alt.texto}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questao;
/**      {resposta !== null && (
        <p>
          Sua resposta está {corrigirResposta() ? "correta" : "errada"}.
        </p>
      )} 
      
  const corrigirResposta = () => {
    const questaoCorreta = alternativas.find((alt) => alt.correta);
    return resposta === questaoCorreta.texto;
  };
      
      
      
      
      
      
      
      */
