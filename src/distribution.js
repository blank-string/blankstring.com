import React from 'react'

import DistributionLink from './components/distribution-link'

export default ({ state }) => <section className='section'>
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
