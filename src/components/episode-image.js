import React from 'react'
import { Link } from 'react-router-dom'

import Social from './social'

const PlainImage = ({ number, size }) => <div className={`image is-${size === 'small' ? '64x64' : '256x256'}`}>
  <div className='episode-number'>
    <span>{number}</span>
  </div>
  <div className='episode-image-container'>
    <img src='/string.jpg' alt={number} />
  </div>
</div>

const LinkedImage = ({ number, size }) => <Link to={`/episode/${number}`}>
  <PlainImage number={number} size={size} />
</Link>

export default ({ url, number = 0, title, size = 'small', link = true }) => {
  return <figure className={`episode-image is-${size} is-${link ? 'link' : 'plain'}`}>
    {link
      ? <LinkedImage number={number} size={size} />
      : <PlainImage number={number} size={size} />}
    <Social url={url} title={title} />
  </figure>
}
