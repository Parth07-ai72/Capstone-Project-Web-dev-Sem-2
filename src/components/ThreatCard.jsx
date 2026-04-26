function ThreatCard({ threat, onSave }){

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="font-bold">{threat.title}</h3>
      <p className="text-gray-600">{threat.body}</p>

      <button 
        onClick={()=>onSave(threat)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Save
      </button>
    </div>
  )
}

export default ThreatCard

