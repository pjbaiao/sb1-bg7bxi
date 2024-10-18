import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    room: ''
  });

  const { name, email, password, room } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
      // Aqui você pode redirecionar o usuário ou definir o token no localStorage
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Nome" name="name" value={name} onChange={onChange} required />
        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
        <input type="password" placeholder="Senha" name="password" value={password} onChange={onChange} required />
        <input type="text" placeholder="Número do Quarto" name="room" value={room} onChange={onChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;