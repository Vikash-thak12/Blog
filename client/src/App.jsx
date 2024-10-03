import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './components/Authentication'

function App() {

  return (
    <main className='bg-black text-white flex flex-col items-center justify-center h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
