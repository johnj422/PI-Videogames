import React from 'react'



export default function Pagination({
  VGperPage,
  allVG,
  paginating,
  currentPage,
}) {

  let pageNumbers = [];
  let totalPages = Math.ceil(allVG / VGperPage);
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i+1);
  }
  return (
    <div>
       <ul>
          {pageNumbers?.map(n => 
            <li className='number' key={n}>
              <button
                className={currentPage === n ? 'activePage' : 'normalPage'}
                onClick={() => paginating(n)}
              >
                {n}
              </button>
            </li>
            )}
       </ul>
    </div>
  )
}
