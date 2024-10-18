import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import ContractButton from './ContractButton';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <div>Carregando...</div>;

  return (
    <div className="container">
      <div className="content-section">
        <h2>Perfil do Aluno</h2>
        <p><strong>Nome:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Quarto:</strong> {user.room}</p>
        <p><strong>Data de Entrada:</strong> {new Date(user.dateJoined).toLocaleDateString()}</p>
        <ContractButton />
      </div>
    </div>
  );
};

export default Profile;