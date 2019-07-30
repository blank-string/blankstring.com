import React, { useReducer, useEffect } from 'react'

import Hero from './hero'
import Footer from './footer'
var parser = require('fast-xml-parser')

const reducer = (state, { type, payload }) => {
  if (type === 'fetch-rss') {
    return { loading: false }
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
    <main className='main'>
      <div className='container'>
        <section className='section'>
          <h2 className='subtitle has-text-centered'>This is the Blank String podcast, staring Luke, Tim and Matt as they talk about things and stuff and junk and things.</h2>
        </section>
      </div>
    </main>
    <Footer />
  </div>
}
