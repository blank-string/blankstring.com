import React from 'react'
import { Link } from 'react-router-dom'

const pageSize = Number(process.env.REACT_APP_PAGE_SIZE)

export default ({ page, state }) => {
  const pages = Math.ceil(state.item.length / pageSize)
  const arr = new Array(pages).fill(0)
  return <nav className='pagination' role='navigation' aria-label='pagination'>
    <Link
      disabled={page === 1}
      to={{
        pathname: `/page/${page > 1 ? page - 1 : 1}`
      }}
      className='pagination-previous'>
      Previous
    </Link>
    <Link
      disabled={page === pages}
      to={{
        pathname: `/page/${page < pages ? page + 1 : page}`
      }}
      className='pagination-next'>
      Next
    </Link>
    <ul className='pagination-list'>
      {arr.map((x, index) => {
        return <li key={`page-${index}`}>
          <Link
            to={{
              pathname: `/page/${index + 1}`
            }}
            className={`pagination-link ${index === (page - 1) ? 'is-current' : 'is-not-current'}`}
            aria-label={`Page ${index + 1}`}
            aria-current='page'>
            {index + 1}
          </Link>
        </li>
      })}
    </ul>
  </nav>
}
