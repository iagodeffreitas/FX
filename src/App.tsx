import React, { useState } from 'react';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Ofertas } from './pages/Ofertas';
import { Papeis } from './pages/Papeis';
import { Terminal } from './pages/Terminal';
import { Perfil } from './pages/Perfil';
import { Carteira } from './pages/Carteira';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'ofertas':
        return <Ofertas setActiveTab={setActiveTab} />;
      case 'papeis':
        return <Papeis setActiveTab={setActiveTab} />;
      case 'terminal':
        return <Terminal />;
      case 'perfil':
        return <Perfil />;
      case 'carteira':
        return <Carteira />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
