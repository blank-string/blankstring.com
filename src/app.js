import React, { useReducer, useEffect } from 'react'

import parser from 'fast-xml-parser'

import Hero from './hero'
import Main from './main'
import Footer from './footer'

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
      <Main />
    </main>
    <Footer />
  </div>
}
