import React from 'react'

import Episode from './episode'

export default ({ state }) => <>
  {state.loading ? <button className='button is-loading is-fullwidth' /> : null}
  <div className='episodes'>
    {state.item.slice(0, 5).map(item => {
      return <Episode key={item['itunes:episode']} title={item.title} number={item['itunes:episode']} description={item.description.replace('<p>', '').replace('</p>', '')} />
    })}
  </div>
</>
