import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: "Como posso pagar o aluguel?",
      answer: "O aluguel deve ser pago até o dia 5 de cada mês através de transferência bancária."
    },
    {
      question: "Posso receber visitas?",
      answer: "Sim, você pode receber visitas das 8h às 22h. Visitas que pernoitam devem ser comunicadas com antecedência."
    },
    {
      question: "Como funciona a limpeza das áreas comuns?",
      answer: "Há uma escala de limpeza rotativa entre os moradores para as áreas comuns. Seu quarto é de sua responsabilidade."
    },
    // Adicione mais FAQs conforme necessário
  ];

  return (
    <div className="container">
      <div className="content-section">
        <h2>Perguntas Frequentes</h2>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;