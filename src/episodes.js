import React from 'react'

import Episode from './episode'

export default ({ page, state }) => <>
  {state.loading ? <button className='button is-loading is-fullwidth' /> : null}
  <div className='episodes'>
    {state.item.slice((page - 1) * 5, page * 5).map(item => <Episode
      key={item['itunes:episode'] || 0}
      title={item.title}
      number={item['itunes:episode']}
      description={item.description.replace('<p>', '').replace('</p>', '')} />)}
  </div>
</>
