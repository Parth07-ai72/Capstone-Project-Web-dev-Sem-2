import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Threats from "./pages/Threats"
import Saved from "./pages/Saved"
import Navbar from "./components/Navbar"
import ThreatCard from "./components/ThreatCard"

function App(){

  return (
    <div className="bg-gray-100 min-h-screen">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/threats" element={<Threats/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/threat/:id" element={<ThreatCard/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

