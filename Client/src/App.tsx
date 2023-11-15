import './App.css'
import { Routes, Route } from "react-router-dom";
import Transaction from './components/Transaction/Transaction';

function App() {


  return (
    <>
    <div className='font-sans'>
     <Routes>
      <Route path="/" element={<Transaction/>} />
     </Routes>
     </div>
    </>
  )
}

export default App
