import React from 'react'
import { Link } from 'react-router-dom'

import BlankString from '../icons/blank-string'

import Hosts from './hosts'

export default () => <section className='hero'>
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
          <BlankString />
        </div>
      </div>
    </div>
  </div>
  <Hosts />
</section>
