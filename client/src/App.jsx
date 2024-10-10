import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './components/Authentication'
import { Toaster } from "react-hot-toast"
import Dashboard from './components/Dashboard'
import Blog from './components/Blog'
import CreatePost from './components/posts/CreatePost'

function App() {

  return (
    <main className='bg-black text-white flex flex-col h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/dashboard/:blogId/' element={<Blog />}/>
          <Route path='/dashboard/post' element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  )
}

export default App
