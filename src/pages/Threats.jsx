import { useEffect, useState } from "react"

function Threats(){

  const [threats, setThreats] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [page, setPage] = useState(0)

  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedSearch(search)
    },500)

    return ()=>clearTimeout(timer)
  },[search])

  useEffect(()=>{
    async function fetchData(){
      setLoading(true)
      setError(null)

      try{
        const res = await fetch(
          `https://services.nvd.nist.gov/rest/json/cves/2.0?startIndex=${page*10}&resultsPerPage=10`
        )

        if(!res.ok){
          throw new Error("Failed to fetch data")
        }

        const data = await res.json()
        setThreats(data.vulnerabilities || [])

      }catch(err){
        setError(err.message)
      }finally{
        setLoading(false)
      }
    }

    fetchData()
  },[page])

  
  const filtered = threats.filter(item =>
    item.cve.id.toLowerCase().includes(debouncedSearch.toLowerCase())
  )

  
  function handleSave(threat){
    const saved = JSON.parse(localStorage.getItem("saved")) || []
    const updated = [...saved, threat]
    localStorage.setItem("saved", JSON.stringify(updated))
    alert("Saved!")
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Cyber Threat Dashboard
        </h1>

        <input
          type="text"
          placeholder="Search by CVE ID..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="mt-3 w-full md:w-1/3 p-3 rounded border 
          bg-white dark:bg-gray-800 
          text-black dark:text-white 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

     
      {loading && (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      )}

      
      {error && (
        <p className="text-red-500">{error}</p>
      )}

      
      {!loading && !error && (
        <>
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
              No threats found
            </p>
          ) : (
            <div className="grid gap-5">

              {filtered.map((item,index)=>{
                const cve = item.cve

                return (
                  <div 
                    key={index}
                    className="
                    bg-white dark:bg-gray-800 
                    shadow-md rounded-lg p-5 
                    hover:shadow-xl hover:scale-[1.02] 
                    transition duration-300
                    "
                  >

                    <h2 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {cve.id}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {cve.descriptions?.[0]?.value.slice(0,140)}...
                    </p>

                    <button
                      onClick={()=>handleSave(cve)}
                      className="
                      bg-blue-500 hover:bg-blue-600 
                      text-white px-4 py-2 rounded 
                      transition duration-200
                      "
                    >
                        Save
                    </button>

                  </div>
                )
              })}

            </div>
          )}
        </>
      )}

      
      <div className="flex justify-center items-center mt-6 space-x-4">

        <button
          onClick={()=>setPage(prev => Math.max(prev-1,0))}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Prev
        </button>

        <span className="text-gray-700 dark:text-gray-300">
          Page {page+1}
        </span>

        <button
          onClick={()=>setPage(prev => prev+1)}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default Threats