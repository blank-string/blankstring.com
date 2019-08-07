import React from 'react'
import EpisodeImage from './components/episode-image'

const Main = ({ episode, number }) => <div><EpisodeImage number={number} title={episode.title} url={episode.link} link={false} size='large' />
  <p className='subtitle has-text-centered'>{episode.title}</p>
  <p className='content'>{episode.description.replace('<p>', '').replace('</p>', '')}</p>
  <div className='embed-container'>
    <iframe src={episode.link.replace('/episodes', '/embed/episodes')} height='102px' width='400px' frameBorder='0' scrolling='no' />
  </div>
</div>

export default ({ state, match }) => {
  const number = Number(match.params.episode) || state.item.length - 1
  const episode = state.item[state.item.length - number - 1]

  return <section className='episode-single section'>
    <div className='container'>
      {state.loading ? <button className='button is-loading is-fullwidth' /> : <Main number={number} episode={episode} />}

    </div>
  </section>
}
