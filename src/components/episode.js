import React from 'react'

import EpisodeImage from './episode-image'

export default ({ url, number = 0, title, description, more, dispatch }) => {
  return <article className='episode media'>
    <div className='media-left'>
      <EpisodeImage
        url={url}
        number={number}
        title={title}
      />
    </div>
    <div className='media-content'>
      <h3 className='title'>{title}</h3>
      <p className='content is-hidden-mobile'>{description}</p>
      <div className='is-hidden-tablet'>
        <button
          className='button-href'
          onClick={() => {
            dispatch({
              type: 'more',
              payload: {
                number
              }
            })
          }}
        >
            SHOW {more ? 'LESS' : 'MORE'}
        </button>
        <p className={`content is-${more ? 'exapnded' : 'collapsed'}`}>{description}</p>
      </div>
    </div>
         </article>
}
