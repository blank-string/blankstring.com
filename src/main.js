import React from 'react'

import Episode from './episode'

const MainTitle = () => <h2 className='subtitle has-text-centered'>This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.</h2>

export default () => <div className='container'>
  <section className='section'>
    <MainTitle />
  </section>
  <section className='section'>
    <input type='text' placeholder='Search Title or Description' />
    <Episode />
    <Episode />
    <Episode />
    <Episode />
    <Episode />
    <button className='button'>LATEST FIRST</button>
    <button className='button' disabled>PREVIOUS 5</button>
    <button className='button'>NEXT 5</button>
  </section>
</div>
