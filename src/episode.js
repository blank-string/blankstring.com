import React from 'react'

import Share from './icons/share.js'
import { facebook, reddit, twitter } from './sharer'

export default ({ url, number = 0, title, description }) => <article className='episode media'>
  <figure className='media-left'>
    <div className='image is-64x64'>
      <div className='episode-number'>
        <span>{number}</span>
      </div>
      <div className='episode-image-container'>
        <img src='/string.png' alt={number} />
      </div>
    </div>
    <button
      className='button share'
      onClick={() => {
        console.log(facebook(url, { quote: 'Hello' }))
        console.log(reddit(url, { title: 'Hello' }))
        console.log(twitter(url, { title: 'Hello' }))
      }}>
      <span className='icon'>
        <Share />
      </span>
      <span className='label'>
        Share
      </span>
    </button>
  </figure>
  <div className='media-content'>
    <h3 className='title'>{title}</h3>
    <p className='content is-hidden-mobile'>{description}</p>
    <div className='is-hidden-tablet'>
      <p className='content is-collapsed'>{description}</p>
      <button className='button'>SHOW MORE</button>
    </div>
  </div>
</article>
