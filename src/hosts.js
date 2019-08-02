import React from 'react'

// import Acast from './icons/acast'
import Anchor from './icons/anchor'
import Breaker from './icons/breaker'
import CastBox from './icons/cast-box'
import GooglePodcast from './icons/google-podcast'
import ITunes from './icons/itunes'
import Overcast from './icons/overcast'
import PocketCast from './icons/pocket-cast'
import Podbean from './icons/podbean'
import RadioPublic from './icons/radio-public'
import Spotify from './icons/spotify'
import Stitcher from './icons/stitcher'
import TuneIn from './icons/tunein'

const HostLink = ({ title, href, children }) => <a
  aria-label={title}
  title={title}
  href={href}
  className={`icon ${title.toLowerCase().replace(/ /g, '-')}`}>
  {children}
</a>

export default () => <div className='hosts'>
  <HostLink
    title='Anchor'
    href='https://anchor.fm/blank-string'>
    <Anchor />
  </HostLink>
  <HostLink
    title='Breaker'
    href='https://www.breaker.audio/blank-string'>
    <Breaker />
  </HostLink>
  <HostLink
    title='Cast Box'
    href='https://castbox.fm/channel/id1422683'>
    <CastBox />
  </HostLink>
  <HostLink
    title='Google Podcast'
    href='https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy83OWQwZDA4L3BvZGNhc3QvcnNz'>
    <GooglePodcast />
  </HostLink>
  <HostLink
    title='iTunes'
    href='https://itunes.apple.com/us/podcast/blank-string/id1267592100?mt=2&uo=4'>
    <ITunes />
  </HostLink>
  <HostLink
    title='Overcast'
    href='https://overcast.fm/itunes1267592100/blank-string'>
    <Overcast />
  </HostLink>
  <HostLink
    title='Pocket Cast'
    href='https://pca.st/X6sO'>
    <PocketCast />
  </HostLink>
  <HostLink
    title='Pocket Cast'
    href='https://www.podbean.com/podcast-detail/kaf45-62411/Blank-String-Podcast'>
    <Podbean />
  </HostLink>
  <HostLink
    title='Radio Public'
    href='https://radiopublic.com/blank-string-WRw9x3'>
    <RadioPublic />
  </HostLink>
  <HostLink
    title='Spotify'
    href='https://open.spotify.com/show/11RzPwC3hC985sncuGy2Z1'>
    <Spotify />
  </HostLink>
  <HostLink
    title='Stitcher'
    href='https://www.stitcher.com/podcast/blank-string'>
    <Stitcher />
  </HostLink>
  <HostLink
    title='Tune In'
    href='https://tunein.com/podcasts/Comedy-Podcasts/Blank-String-p1017367'>
    <TuneIn />
  </HostLink>
</div>
