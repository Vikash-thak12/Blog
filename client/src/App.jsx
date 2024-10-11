import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Authentication from './components/Authentication'
import { Toaster } from "react-hot-toast"
import Dashboard from './components/Dashboard'
import CreatePost from './components/Blogs/CreatePost'
// import Blog from './components/Blogs/Blog'
import UpdateBlog from './components/Blogs/UpdateBlog'

function App() {

  return (
    <main className='bg-black text-white flex flex-col h-screen px-20'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/dashboard/:blogId/' element={<UpdateBlog />}/>
          <Route path='/dashboard/post' element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  )
}

export default App
