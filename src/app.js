import React, { useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import parser from 'fast-xml-parser'
import cookies from 'js-cookie'

import initialState from './initial-state.json'
import Hero from './components/hero'
import Main from './main'
import EpisodeSingle from './episode-single'
import Distribution from './distribution'
import DistributionSingle from './distribution-single'
import NotFound from './not-found'
import Cookies from './components/cookies'
import Footer from './components/footer'

const reducer = (state, { type, payload }) => {
  if (type === 'fetch-rss') {
    const { description, item } = payload.data.rss.channel
    return { ...state, loading: false, description, item, distribution: state.distribution }
  }

  if (type === 'accepted') {
    cookies.set('accepted', true)
    return { ...state, accepted: true }
  }

  return { ...state }
}

const fetchRss = async (dispatch) => {
  const res = await fetch('https://anchor.fm/s/79d0d08/podcast/rss', {
    mode: 'cors'
  })
  const text = await res.text()
  dispatch({ type: 'fetch-rss', payload: { data: parser.parse(text) } })
}

export default () => {
  initialState.accepted = cookies.get('accepted') || false
  initialState.loading = true

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.loading) fetchRss(dispatch)
  })

  return <div className='App'>
    <Router>
      <Hero state={state} />
      <main className='main'>
        <Switch>
          <Route exact path='/' render={(props) => <Main {...props} state={state} />} />
          <Route path='/page/:page' render={(props) => <Main {...props} state={state} />} />
          <Route path='/page' render={(props) => <Main {...props} state={state} />} />
          <Route path='/episode/:episode' render={(props) => <EpisodeSingle {...props} state={state} />} />
          <Route path='/episode' render={(props) => <EpisodeSingle {...props} state={state} />} />
          <Route path='/distribution/:distribution' render={(props) => <DistributionSingle {...props} state={state} />} />
          <Route path='/distribution' render={(props) => <Distribution {...props} state={state} />} />
          <Route path='*' render={(props) => <NotFound {...props} state={state} />} />
        </Switch>
      </main>
      <Cookies dispatch={dispatch} accepted={state.accepted} />
      <Footer state={state} />
    </Router>
         </div>
}
