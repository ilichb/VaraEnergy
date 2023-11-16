import './App.css'
import { Routes, Route } from "react-router-dom";
import ViewTransactions from './components/ViewTransactions/ViewTransactions';

function App() {


  return (
    <>
    <div className='font-sans'>
     <Routes>
      <Route path="/" element={<ViewTransactions/>} />
     </Routes>
     </div>
    </>
  )
}

export default App
