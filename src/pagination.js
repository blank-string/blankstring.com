import React from 'react'

export default ({ state }) => {
  const pages = Math.ceil(state.item.length / 5)
  const arr = new Array(pages).fill(0)
  return <nav className='pagination' role='navigation' aria-label='pagination'>
    <a className='pagination-previous' title='This is the first page' disabled>Previous</a>
    <a className='pagination-next'>Next page</a>
    <ul className='pagination-list'>
      {arr.map((x, index) => {
        return <li>
          <a className='pagination-link' aria-label={`Page ${index + 1}`} aria-current='page'>{index + 1}</a>
        </li>
      })}
    </ul>
  </nav>
}
