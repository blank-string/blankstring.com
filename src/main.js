import React from 'react'

import Episodes from './episodes'
import Pagination from './pagination'

const MainTitle = ({ description }) => <h2 className='subtitle has-text-centered'>{description}</h2>

export default ({ state }) => <div className='container'>
  <section className='section'>
    <MainTitle description={state.description} />
  </section>
  <section className='section'>
    {/* <input type='text' placeholder='Search Title or Description' /> */}
    <Episodes state={state} />
    {state.loading ? null : <Pagination state={state} />}
  </section>
</div>
