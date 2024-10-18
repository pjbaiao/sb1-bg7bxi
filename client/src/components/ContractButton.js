import React from 'react';
import axios from 'axios';

const ContractButton = () => {
  const downloadContract = async () => {
    try {
      const response = await axios.get('/api/contracts/generate', {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        },
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'contrato.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Erro ao baixar o contrato', error);
    }
  };

  return (
    <button onClick={downloadContract}>Baixar Contrato</button>
  );
};

export default ContractButton;