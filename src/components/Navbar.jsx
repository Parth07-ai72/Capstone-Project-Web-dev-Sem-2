import { Link } from "react-router-dom"

function Navbar(){

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">

      <h1 className="font-bold text-lg tracking-wide">
          Cyber Dashboard
      </h1>

      <div className="flex space-x-4">

        <Link 
          to="/" 
          className="px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Dashboard
        </Link>

        <Link 
          to="/threats" 
          className="px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Threats
        </Link>

        <Link 
          to="/saved" 
          className="px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Saved
        </Link>

      </div>

    </nav>
  )
}

export default Navbar