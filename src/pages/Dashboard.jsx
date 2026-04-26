import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function Dashboard(){

  const data = [
    { name: "Critical", value: 5 },
    { name: "High", value: 10 },
    { name: "Medium", value: 7 },
    { name: "Low", value: 3 }
  ]

  const savedCount = JSON.parse(localStorage.getItem("saved") || "[]").length

  return (
    <div className="min-h-screen p-6">

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Cybersecurity Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Monitor cyber threats in real-time
        </p>
      </div>

      
      <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-gray-400 text-sm">Total Threats</h2>
          <p className="text-2xl font-bold text-blue-500">120+</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-gray-400 text-sm">Saved Threats</h2>
          <p className="text-2xl font-bold text-green-500">
            {savedCount}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow">
          <h2 className="text-gray-400 text-sm">Status</h2>
          <p className="text-2xl font-bold text-red-500">Active</p>
        </div>

      </div>

     
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">

        <h2 className="text-gray-400 text-sm">
          Threat Severity Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="value" fill="#3b82f6"/>
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default Dashboard

