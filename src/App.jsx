import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Cookies from 'js-cookie';
import { Menubar } from 'primereact/menubar';
import LogoTeddy from "./assets/zero-start-logo.png";
import './App.css';

import ListarProfessores from "./components/professores/listar-professores";
import ListarMaterias from "./components/materias/listar-materias";
import Sobre from "./components/sobre/sobre";
import Login from "./components/login/login";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');

  // Função para determinar a saudação
  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return 'Bom dia';
    } else if (hour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  }

  useEffect(() => {
    // Tenta obter o nome de usuário do cookie
    const user = Cookies.get('username');
    user && setUsername(user);
    setGreeting(getGreeting());
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove('username');
    localStorage.removeItem('username');
    setUsername(''); // Limpa o estado do username
    navigate('/'); // Redireciona para a página de login
  };

  const items = [
    {
      label: 'Professores',
      url: '/ListarProfessores'
    },
    {
      label: 'Matérias',
      url: '/ListarMaterias'
    },
    {
      label: 'Sobre',
      url: '/Sobre'
    },
    {
      label: 'Sair',
      command: handleLogout // Adiciona a função de logout ao clicar em "Sair"
    }
  ];

  const start = (
    <Link to="/ListarProfessores">
      <img alt="logo" src={LogoTeddy} height="40" className="mr-2" />
    </Link>
  );

  const end = (
    <div className="welcome flex align-items-center gap-2">
      <span className="mx-2">{username ? `${greeting}, ${username}` : ''}</span>
    </div>
  );

  return (
    <div className="card">
      {location.pathname !== '/' && (
        <Menubar model={items} start={start} end={end} className="custom-menubar" />
      )}
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ListarProfessores" element={<ListarProfessores />} />
          <Route path="/ListarMaterias" element={<ListarMaterias />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;