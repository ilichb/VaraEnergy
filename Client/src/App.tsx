import './App.css'
import { Routes, Route } from "react-router-dom";
import PanelUsuarioFinal from './pages/panelUsuarioFinal/PanelUsuarioFinal';
import GraficoEnergia from './pages/GraficoEnergia/GraficoEnergia';
import ViewTransactions from './components/ViewTransactions/ViewTransactions';

function App() {


  return (
    <>
    <div className='font-sans'>
     <Routes>
      {/* <Route path="/" element={<Prueba/>} /> */}
      <Route path="/panelUsuarioFinal" element={<PanelUsuarioFinal/>} />
      <Route path="/graficoEnergia" element={<GraficoEnergia/>} />
      <Route path="/" element={<ViewTransactions/>} />
     </Routes>
     </div>
    </>
  )
}

export default App
