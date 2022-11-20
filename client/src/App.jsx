import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import { Routes, Route } from 'react-router-dom'
import Chat from "./components/Chat"
import EditProfile from "./components/EditProfile"

function App() {

  return (
    <div className="App">
      <div>

        {/* <Navbar /> */}
        <Routes>
          <Route path='/chatapp/register' element={<Register />} />
          <Route path='/chatapp/login' element={<Login />} />
          <Route path='/chatapp/home' element={<Chat />} />
          <Route path='/chatapp/editProfile' element={<EditProfile />} />
        </Routes>


      </div>

    </div>
  )
}

export default App