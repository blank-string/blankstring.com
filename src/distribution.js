import React from 'react'
import { Helmet } from 'react-helmet'

import DistributionLink from './components/distribution-link'

export default ({ state }) => <>
  <Helmet>
    <title>{`Blank String Podcast Distribution`}</title>
    <meta name='title' content='Blank String Podcast Distribution' />
    <meta name='og:title' content='Blank String Podcast Distribution' />
    <meta name='description' content='You can find Blank String on the following platforms' />
    <meta name='og:description' content='You can find Blank String on the following platforms' />
    <meta name='og:url' content='https://blankstring.com' />
  </Helmet>
  <section className='section'>
    <div className='container'>
      <p className='subtitle has-text-centered'>You can find Blank String on the following platforms</p>
      <ul>
        {state.distribution.map(({ name, href, title }) => <li key={name}>
          <DistributionLink
            name={name}
            href={href}
            title={title} />
        </li>)}
      </ul>
    </div>
  </section>
</>
