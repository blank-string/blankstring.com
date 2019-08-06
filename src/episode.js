import React, { useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faClipboard, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { facebook, reddit, twitter } from './sharer'

const SocialLink = ({ url, icon, label }) => <div>
  <a
    rel='noopener noreferrer'
    target='_blank'
    href={url}>
    <i className='icon'>
      <FontAwesomeIcon icon={icon} />
    </i>
    <span>{label}</span>
  </a>
</div>

const Copy = ({ copied, url, onCopy }) => <div>
  <a>
    <CopyToClipboard text={url} onCopy={onCopy}>
      <div>
        <i className='icon'>
          <FontAwesomeIcon icon={copied ? faCheck : faClipboard} />
        </i>
        <span>Copy</span>
      </div>
    </CopyToClipboard>
  </a>
</div>

export default ({ url, number = 0, title, description }) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  return <article className='episode media'>
    <figure className='media-left'>
      <div className='image is-64x64'>
        <div className='episode-number'>
          <span>{number}</span>
        </div>
        <div className='episode-image-container'>
          <img src='/string.jpg' alt={number} />
        </div>
      </div>
      <div className='social'>
        {!open
          ? <a onClick={() => {
            setOpen(true)
          }}>
            <i className='icon'>
              <FontAwesomeIcon icon={faShare} />
            </i>
            <span>Share</span>
          </a>
          : null}
        {open
          ? <a onClick={() => {
            setOpen(false)
          }}>
            <i className='icon'>
              <FontAwesomeIcon icon={faTimes} />
            </i>
            <span>Close</span>
          </a>
          : null}
        <div className={`links is-${open ? 'open' : 'closed'}`}>
          <SocialLink
            url={facebook(url, { quote: title })}
            icon={faFacebookF}
            label='Facebook' />
          <SocialLink
            url={reddit(url, { title })}
            icon={faRedditAlien}
            label='Reddit' />
          <SocialLink
            url={twitter(url, { title })}
            icon={faTwitter}
            label='Twitter' />
          <Copy
            copied={copied}
            url={url}
            onCopy={() => {
              setCopied(true)
            }} />
        </div>
      </div>

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
}
