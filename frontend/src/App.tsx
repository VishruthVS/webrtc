import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Receiver } from './components/Reciever'
import { Sender } from './components/Sender'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sender" element={<Sender/>} />
        <Route path="/receiver" element={<Receiver/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App