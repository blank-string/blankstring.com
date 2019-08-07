import React from 'react'
import { Helmet } from 'react-helmet'
import EpisodeImage from './components/episode-image'

const Main = ({ episode, number }) => <div>
  <EpisodeImage number={number} title={episode.title} url={episode.link} link={false} size='large' />
  <p className='subtitle has-text-centered'>{episode.title}</p>
  <p className='content'>{episode.description.replace('<p>', '').replace('</p>', '')}</p>
  <div className='embed-container'>
    {navigator.userAgent === 'ReactSnap' ? null : <iframe title={episode.title} src={episode.link.replace('/episodes', '/embed/episodes')} height='102px' width='400px' frameBorder='0' scrolling='no' />}
  </div>
</div>

export default ({ state, match }) => {
  const number = Number(match.params.episode) || state.item.length - 1
  const episode = state.item[state.item.length - number - 1]

  let url = `https://blabkstring.com/episode/${number}`
  let title = `Blank String Podcast ${number}`
  let description = state.description

  if (!state.loading) {
    title = episode.title
    description = episode.description.replace(/\n$/g, '').replace('<p>', '').replace('</p>', '')
    url = episode.link
  }

  return <>
    <Helmet>
      <title>{`Blank String Podcast ${number}`}</title>
      <meta name='title' content={title} />
      <meta name='og:title' content={title} />
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />
      <meta name='og:url' content={url} />
    </Helmet>
    <section className='episode-single section'>
      <div className='container'>
        {state.loading ? <button className='button is-loading is-fullwidth' /> : <Main number={number} episode={episode} />}
      </div>
    </section>
  </>
}
