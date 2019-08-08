import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

import icons from '../icons'

const HostLink = ({ title, href, children }) => <a
  aria-label={title}
  title={title}
  href={href}
  className={`icon ${title.toLowerCase().replace(/ /g, '-')}`}>
  {children}
</a>

export default ({ distribution }) => <div className='hosts'>
  {distribution.map(({ name, href, title }) => {
    return <HostLink key={name}
      title={title}
      href={href}>
      {icons[name]()}
    </HostLink>
  })}
  <Link
    to='/distribution'
    className='icon distribution'>
    <FontAwesomeIcon icon={faPodcast} />
  </Link>
</div>
