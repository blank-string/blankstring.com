import React from 'react'

import EpisodeImage from './episode-image'

export default ({ url, number = 0, title, description }) => {
  return <article className='episode media'>
    <div className='media-left'>
      <EpisodeImage
        url={url}
        number={number}
        title={title} />
    </div>
    <div className='media-content'>
      <h3 className='title'>{title}</h3>
      <p className='content is-hidden-mobile'>{description}</p>
      <div className='is-hidden-tablet'>
        <p className='content is-collapsed'>{description}</p>
        <button className='button'>SHOW MORE</button>
      </div>
    </div>
  </article>
}
