import React from 'react'
import { render, hydrate } from 'react-dom'
import 'cookieconsent/build/cookieconsent.min.js'
import 'cookieconsent/build/cookieconsent.min.css'
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
else serviceWorker.register()

window.cookieconsent.initialise({
  container: document.getElementById('content'),
  elements: {
    messagelink: '<p id="cookieconsent:desc" class="content cookie-content">{{message}} <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span>',
    dismiss: '<button aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss button">ACCEPT</button>'
  },
  palette: {
    popup: { background: '#1F1C1C' }
  }
})
