import React, { useState } from 'react'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare, faClipboard, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faRedditAlien, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { facebook, reddit, twitter } from '../sharer'

const SocialLink = ({ url, icon, label }) => <div>
  <a
    className='button-href'
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
  <button className='button-href'>
    <CopyToClipboard text={url} onCopy={onCopy}>
      <div>
        <i className='icon'>
          <FontAwesomeIcon icon={copied ? faCheck : faClipboard} />
        </i>
        <span>Copy</span>
      </div>
    </CopyToClipboard>
  </button>
</div>

export default ({ url, title }) => {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  return <div className={`social is-${open ? 'open' : 'closed'}`}>
    {!open
      ? <button
        className='button-href'
        onClick={() => {
          setOpen(true)
        }}>
        <i className='icon'>
          <FontAwesomeIcon icon={faShare} />
        </i>
        <span>Share</span>
      </button>
      : null}
    {open
      ? <button
        className='button-href'
        onClick={() => {
          setOpen(false)
        }}>
        <i className='icon'>
          <FontAwesomeIcon icon={faTimes} />
        </i>
        <span>Close</span>
      </button>
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
}
