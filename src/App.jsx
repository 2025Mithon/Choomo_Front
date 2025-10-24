import { Routes, Route } from 'react-router-dom'
import Kakaomap from "./pages/Kakaomap"
import Login from "./pages/Login"
import SignUP from "./pages/SignUP"
import MemoryCreatePage from "./pages/MemoryCreatePage";
import Chat from "./pages/Chat";
import Board from "./pages/Board";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Kakaomap />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUP" element={<SignUP />} />
      <Route path="/MemoryCreate" element={<MemoryCreatePage />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/board' element={<Board />} />
    </Routes>
  )
}
export default App
