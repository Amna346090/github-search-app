import React from 'react'

function Pagination({reposPerPage, totalRepos, paginate, loading}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
        pageNumbers.push(i);
    }

  if(!loading){  
  return (
    <ul className='pagination'>
        {
        pageNumbers.map(number => (
            <li key={number}>
                <a href="!#" className='page-link' onClick={() => paginate(number) }>{number}</a>
            </li>
        ))
         }
    </ul>
  )
 }
    
}

export default Pagination
