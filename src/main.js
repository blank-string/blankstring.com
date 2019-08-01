import React from 'react'

import Episodes from './episodes'
import Pagination from './pagination'

const MainTitle = ({ description }) => <h2 className='subtitle has-text-centered'>{description}</h2>

export default ({ match, state }) => {
  const page = Number(match.params.page) || 1
  return <div className='container'>
    <section className='section'>
      <MainTitle description={state.description} />
    </section>
    <section className='section'>
      {/* <input type='text' placeholder='Search Title or Description' /> */}
      <Episodes page={page} state={state} />
      {state.loading ? null : <Pagination page={page} state={state} />}
    </section>
  </div>
}
