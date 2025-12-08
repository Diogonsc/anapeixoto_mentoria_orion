import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import MentoriaExecutiva from '../pages/mentoria-executiva';
import MentoriaCarreira from '../pages/mentoria-carreira';
import ProdutoDigital from '../pages/produto-digital';
import ApresentacaoCompleta from '../pages/apresentacao-completa';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentoria-executiva" element={<MentoriaExecutiva />} />
      <Route path="/mentoria-carreira" element={<MentoriaCarreira />} />
      <Route path="/produto-digital" element={<ProdutoDigital />} />
      <Route path="/apresentacao-completa" element={<ApresentacaoCompleta />} />
    </Routes>
  );
}

