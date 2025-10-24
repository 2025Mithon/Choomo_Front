import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kakaomap from "./pages/Kakaomap"
import Login from "./pages/Login"
import SignUP from "./pages/SignUP"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kakaomap />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUP" element={<SignUP />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
