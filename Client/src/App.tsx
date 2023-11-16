import './App.css'
import Prueba from './components/Prueba/Prueba'
import { Routes, Route } from "react-router-dom";
import PanelUsuarioFinal from './pages/panelUsuarioFinal/PanelUsuarioFinal';
import GraficoEnergia from './pages/GraficoEnergia/GraficoEnergia';

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Prueba/>} />
      <Route path="/panelUsuarioFinal" element={<PanelUsuarioFinal/>} />
      <Route path="/graficoEnergia" element={<GraficoEnergia/>} />
     </Routes>
    </>
  )
}

export default App
