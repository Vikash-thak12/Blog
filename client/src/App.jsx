import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './components/Authentication'
import { Toaster } from "react-hot-toast"
import Dashboard from './components/Dashboard'

function App() {

  return (
    <main className='bg-black text-white flex flex-col items-center justify-center h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  )
}

export default App
