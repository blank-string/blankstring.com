import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default ({ state }) => {
  const title = 'Blank String Podcast 404 Not Found'
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
    <section className='section'>
      <div className='container'>
        <pre className='subtitle has-text-centered'>{`Oh drat!

The page you are looking for does not exist
Someone done goofed

Instead why not go `}<Link to='/'>HOME</Link></pre>
      </div>
    </section>
  </>
}
