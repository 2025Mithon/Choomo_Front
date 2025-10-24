import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Kakaomap from "./pages/Kakaomap"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kakaomap />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
