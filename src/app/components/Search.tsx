'use client'
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"

function Search() {
  const [search, setSearch] = useState("")
  const router = useRouter()


  const handleSubmit =async (e:FormEvent)=>{
    e.preventDefault()
    setSearch("")
    router.push(`/${search}`)
   
  }

    
  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
        <input 
        onChange={(e)=> setSearch(e.target.value)}
        type="text" 
        value={search}
        className="bg-white p-2 w-80 text-xl rounded-xl text-slate-800"
        placeholder="Search..."
        />
        <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
        </button>
    </form>
  )
}

export default Search;
