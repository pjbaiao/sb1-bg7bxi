import React from 'react';

const Rules = () => {
  const rules = [
    "Respeite o silêncio entre 22h e 7h.",
    "Mantenha as áreas comuns limpas após o uso.",
    "Não é permitido fumar dentro da casa.",
    "Respeite a privacidade dos outros moradores.",
    "Comunique qualquer problema ou dano à administração imediatamente.",
    "Siga a escala de limpeza das áreas comuns.",
    "Economize água e energia elétrica.",
    "Não é permitido ter animais de estimação sem autorização prévia.",
    "Respeite as regras de uso da lavanderia e outros espaços compartilhados.",
    "Mantenha seus pertences seguros. A administração não se responsabiliza por itens perdidos ou danificados."
  ];

  return (
    <div className="container">
      <div className="content-section">
        <h2>Normas da Casa</h2>
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rules;