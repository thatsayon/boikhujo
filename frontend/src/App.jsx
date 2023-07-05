import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
