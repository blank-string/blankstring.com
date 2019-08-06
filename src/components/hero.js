import React from 'react'
import BlankString from '../icons/blank-string'

import Hosts from './hosts'

export default () => <section className='hero'>
  <div className='hero-body'>
    <div className='container'>
      <div className='level is-mobile'>
        <div className='level-left'>
          <h1 className='title'>
            <span className='b'>B</span>lank
            <br />
            <span className='s'>S</span>tring
          </h1>
        </div>
        <div className='level-right'>
          <BlankString />
        </div>
      </div>
    </div>
  </div>
  <Hosts />
</section>
