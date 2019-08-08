import React from 'react'
import { Link } from 'react-router-dom'

import Hosts from './hosts'

export default ({ state }) => {
  return <header>
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='level is-mobile'>
            <div className='level-left'>
              <Link to='/'>
                <h1 className='title'>
                  <span className='b'>B</span>lank
                  <br />
                  <span className='s'>S</span>tring
                </h1>
              </Link>
            </div>
            <div className='level-right'>
              <figure className='image'>
                <img src='/string.jpg' alt='Blank String' />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <Hosts distribution={state.distribution} />
    </section>
  </header>
}
