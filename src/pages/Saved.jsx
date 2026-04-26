import { useEffect, useState } from "react"

function Saved(){

  const [saved, setSaved] = useState([])

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("saved")) || []
    setSaved(data)
  },[])

  function handleDelete(id){
    const updated = saved.filter(item => item.id !== id)
    setSaved(updated)
    localStorage.setItem("saved", JSON.stringify(updated))
  }

  function clearAll(){
    localStorage.removeItem("saved")
    setSaved([])
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
           Saved Threats
        </h1>

        {saved.length > 0 && (
          <button
            onClick={clearAll}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Clear All
          </button>
        )}
      </div>

      {saved.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 dark:text-gray-400">
          <h2 className="text-xl">No saved threats yet</h2>
          <p>Start saving vulnerabilities from Threats page</p>
        </div>
      ) : (

        <>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Total Saved: <span className="font-semibold">{saved.length}</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {saved.map((item,index)=>(
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 hover:shadow-xl transition"
              >

                <h3 className="font-bold text-blue-600 mb-2">
                  {item.id}
                </h3>

                
                <p className="text-gray-600 text-sm mb-3">
                  {item.descriptions?.[0]?.value?.slice(0,120)}...
                </p>

                <button
                  onClick={()=>handleDelete(item.id)}
                  className="bg-black hover:bg-gray-800 text-white px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  )
}

export default Saved