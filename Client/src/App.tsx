import './App.css'
import Prueba from './components/Prueba/Prueba'
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Prueba/>} />
     </Routes>
    </>
  )
}

export default App
