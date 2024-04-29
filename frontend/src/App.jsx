import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signup } from "./pages/Singup"
import { SendMoney } from "./pages/SendMoney"
import { Dashboard } from "./pages/Dashboard"
import { Signin } from "./pages/Signin"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SendMoney" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
