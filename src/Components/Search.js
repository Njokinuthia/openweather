import React , {useState} from "react";

function Search({ handleSearch}) {
  const [search, setSearch] = useState("")
  
  function handleChange(event){
    setSearch(event.target.value)
    console.log(search)
  }

  function handleSubmit(event) {
    event.preventDefault()    
    console.log(event.target.value)    
    handleSearch(search)
  }

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        value={search}
        onChange={handleChange}
      required/>
    </form>
  )
}

export default Search;
