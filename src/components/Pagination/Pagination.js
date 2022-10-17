import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber, setPageNumber}) => {


  return (
    <ReactPaginate 
    className="pagination justify-content-center gap-3 my-3"
    nextLabel="Next"
    previousLabel="Prev"
    nextclassName="btn btn-primary"
    previousclassName="btn btn-primary"
    pageclassName="page-item"
    pageLinkclassName="page-link"
    onPageChange={
        (data)=>{setPageNumber(data.selected + 1)}
    }
    forcePage={pageNumber===1? 0 : pageNumber - 1}
    activeclassName="active"
    pageCount={info?.pages}/>
  )
}

export default Pagination