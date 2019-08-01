import React from 'react'

export default ({ number, title, description }) => <article className='episode media'>
  <figure className='media-left'>
    <div className='image is-64x64'>
      <div className='episode-number'>
        <span>{number}</span>
      </div>
      <div className='episode-image-container'>
        <img src='/string.png' alt={number} />
      </div>
    </div>
    {/* <button className='button'>SHARE</button> */}
  </figure>
  <div className='media-content'>
    <h3 className='title'>{title}</h3>
    <p className='content'>{description}</p>
  </div>
</article>
