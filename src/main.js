import React from 'react'

import Episode from './episode'

const MainTitle = ({ description }) => <h2 className='subtitle has-text-centered'>{description}</h2>

export default ({ state }) => <div className='container'>
  <section className='section'>
    <MainTitle description={state.description} />
  </section>
  <section className='section'>
    {/* <input type='text' placeholder='Search Title or Description' /> */}
    {state.loading ? <button className='button is-loading is-fullwidth' /> : null}
    <div className='episodes'>
      {state.item.slice(0, 5).map(item => {
        return <Episode key={item['itunes:episode']} title={item.title} number={item['itunes:episode']} description={item.description.replace('<p>', '').replace('</p>', '')} />
      })}
    </div>
    {/* <nav className='pagination' role='navigation' aria-label='pagination'>
      <a className='pagination-previous' title='This is the first page' disabled>Previous</a>
      <a className='pagination-next'>Next page</a>
      <ul className='pagination-list'>
        <li>
          <a className='pagination-link is-current' aria-label='Page 1' aria-current='page'>1</a>
        </li>
        <li>
          <a className='pagination-link' aria-label='Goto page 2'>2</a>
        </li>
        <li>
          <a className='pagination-link' aria-label='Goto page 3'>3</a>
        </li>
      </ul>
    </nav> */}
  </section>
</div>
