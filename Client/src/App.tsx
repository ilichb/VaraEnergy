import './App.css'
import { Routes, Route } from "react-router-dom";
import PanelUsuarioFinal from './pages/panelUsuarioFinal/PanelUsuarioFinal';
import GraficoEnergia from './pages/GraficoEnergia/GraficoEnergia';
import ViewTransactions from './components/ViewTransactions/ViewTransactions';
import Login from './pages/Login/Login'
import SuperUser from './pages/superUser/SuperUser';
import Labs from './components/Labs/Labs';


function App() {


  return (
    <>
    <div className='font-sans'>
     <Routes>
      {/* <Route path="/" element={<Prueba/>} /> */}
      <Route path="/panelUsuarioFinal" element={<PanelUsuarioFinal/>} />
      <Route path="/graficoEnergia" element={<GraficoEnergia/>} />
      <Route path="/superUser" element={<SuperUser/>} />
      <Route path="/" element={<ViewTransactions/>} />
      <Route path="/login" element={<Login/>} />
      <Route path='/lab' element={<Labs/>}/>
     </Routes>
     </div>
    </>
  )
}

export default App
