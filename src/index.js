import React from 'react'
import { render, hydrate } from 'react-dom'
import './index.css'
import 'bulma/css/bulma.css'
import App from './app'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}

if (navigator.userAgent !== 'ReactSnap') serviceWorker.register()
else serviceWorker.unregister()
