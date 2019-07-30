import React, { useReducer, useEffect } from 'react'

import Hero from './hero'
import Footer from './footer'
var parser = require('fast-xml-parser')

const reducer = (state, { type, payload }) => {
  if (type === 'fetch-rss') {
    const link = payload.data.rss.channel.item[0].link.replace('/episodes/', '/embed/episodes/')
    return { loading: false, link }
  }

  return { loading: true }
}

const initialState = {
  loading: true
}

const fetchRss = async (dispatch) => {
  const res = await fetch('https://anchor.fm/s/79d0d08/podcast/rss', {
    mode: 'cors'
  })
  const text = await res.text()
  parser.parse(text)
  dispatch({ type: 'fetch-rss', payload: { data: parser.parse(text) } })
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.loading) fetchRss(dispatch)
  })

  return <div className='App'>
    <header>
      <Hero />
    </header>
    <main>
      <div className='container'>
        {state.link
          ? <iframe
            title='Blank String embed'
            src={state.link}
            scrolling='no' />
          : null}
      </div>
    </main>
    <Footer />
  </div>
}
