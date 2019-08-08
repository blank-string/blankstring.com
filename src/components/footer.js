import React from 'react'

import Hosts from './hosts'

export default ({ state }) => <footer className='footer'>
  <Hosts distribution={state.distribution} />
</footer>
