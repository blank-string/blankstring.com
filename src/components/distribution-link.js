import React from 'react'
import { Link } from 'react-router-dom'

import Social from './social'
import icons from '../icons'

const Linked = ({ name, title }) => <Link to={`/distribution/${name}`} className='local-container'>
  <i className='icon'>
    {icons[name]()}
  </i>
  <span>{title}</span>
</Link>

const Unlinked = ({ name, title }) => <div className='local-container'>
  <i className='icon'>
    {icons[name]()}
  </i>
  <span>{title}</span>
</div>

export default ({ name, href, title, link = true }) => <div className='distribution-link'>
  <div className={`local is-${link ? 'linked' : 'not-linked'}`}>
    {link
      ? <Linked name={name} title={title} />
      : <Unlinked name={name} title={title} />}
  </div>
  <div className='external'>
    <a href={href}>{href}</a>
  </div>
  <Social url={href} title={`Listen to the Blank String Podcast on ${title}`} />
</div>
