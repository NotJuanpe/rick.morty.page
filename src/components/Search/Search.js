import React from 'react';


const Search = ({setSearch,setPageNumber}) => {
  return (
    <form className='d-flex justify-content-center gap-4 mb-5'>
        <input 
        onChange={e=>{
          setPageNumber(1);
          setSearch(e.target.value)
        }}
        placeholder='Search for Characters'
        type="text"
        style={{width: "40%" , border:"2px solid #0b5ed7"}}
        className='rounded-1 shadow'/>

        <button 
        onClick={e=>{
          e.preventDefault();
        }}
        className='btn btn-primary fs-5 shadow'>Search</button>
    </form> 
  )
}

export default Search