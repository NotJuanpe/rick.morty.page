import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState ,useEffect } from 'react'
import Filters from "./components/Filters/Filters"
import Pagination from "./components/Pagination/Pagination"
import Cards from "./components/Cards/Cards"
import Search from "./components/Search/Search"
import Navbar from "./components/NavBar/navbar"


import "bootstrap/dist/js/bootstrap"


function App() {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status,setStatus] = useState("");
  let [gender,setGender] = useState("");
  let [species,setSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info , results} = fetchedData;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function(){
      let data = await fetch(api).then(res => res.json())
      updateFetchedData(data)
    })()
  },[api])

  return (
    <div className="App">
      <Navbar/>
      

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
            <Filters 
            setStatus={setStatus}
            setGender={setGender} 
            setSpecies={setSpecies}
            setPageNumber={setPageNumber}/>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} setPageNumber= {setPageNumber} pageNumber={pageNumber}/>
    </div>
  );
}

export default App;
