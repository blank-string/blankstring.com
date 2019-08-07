import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faClipboard, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { facebook, reddit, twitter } from '../sharer'

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
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  return <figure className={`episode-image is-${size} is-${open ? 'open' : 'closed'} is-${link ? 'link' : 'plain'}`}>
    {link
      ? <LinkedImage number={number} size={size} />
      : <PlainImage number={number} size={size} />}

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
      {open
        ? <div className={`links`}>
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
        : null}
    </div>

  </figure>
}
