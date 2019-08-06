import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default () => {
  useEffect(() => {
    document.title = 'Not Found'
  })
  return <section className='section'>
    <div className='container'>
      <pre className='subtitle has-text-centered'>{`Oh drat!

The page you are looking for does not exist
Someone done goofed

Instead why not go `}<Link to='/'>HOME</Link></pre>
    </div>
  </section>
}
