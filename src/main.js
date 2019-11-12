import React from 'react'
import { Helmet } from 'react-helmet'

import Episodes from './components/episodes'
import Pagination from './components/pagination'

const MainTitle = ({ description }) => <h2 className='subtitle has-text-centered'>{description}</h2>

export default ({ match, state, dispatch }) => {
  const page = Number(match.params.page) || 1
  const title = 'Blank String Podcast'
  const description = state.description
  const url = 'https://blankstring.com'

  return <>
    <Helmet>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
      <meta name='og:url' content={url} />
    </Helmet>
    <div className='container'>
      <section className='section'>
        <MainTitle description={state.description} />
      </section>
      <section className='section'>
        {state.loading ? null : <Pagination page={page} state={state} />}
        <Episodes page={page} state={state} dispatch={dispatch} />
        {state.loading ? null : <Pagination page={page} state={state} />}
      </section>
    </div>
  </>
}
