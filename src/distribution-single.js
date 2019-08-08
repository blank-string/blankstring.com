import React from 'react'

import DistributionLink from './components/distribution-link'

export default ({ state, match }) => {
  let found = state.distribution.filter(({ name }) => name === match.params.distribution)
  found = found[0] || state.distribution[0]
  return <section className='section'>
    <div className='container'>
      <div className='distribution-hero-text-container'>
        <div className='distribution-hero-text'>
          <pre className='distribution-hero-text-left'>{`Go listen to the
well designed`}</pre>
          <p className='distribution-hero-text-right'>PODCAST</p>
        </div>
      </div>
      <ul>
        <li key={found.name}>
          <DistributionLink
            link={false}
            name={found.name}
            href={found.href}
            title={found.title} />
        </li>
      </ul>
    </div>
  </section>
}
