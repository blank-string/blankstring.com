import React from 'react'

import Episode from './episode'

const pageSize = Number(process.env.REACT_APP_PAGE_SIZE)

export default ({ page, state, dispatch }) => <>
  {state.loading ? <button className='button is-loading is-fullwidth' /> : null}
  <div className='episodes'>
    {state.item.slice((page - 1) * pageSize, page * pageSize).map(item => <Episode
      url={item.link}
      key={item['itunes:episode'] || 0}
      title={item.title}
      number={item['itunes:episode']}
      description={item.description.replace('<p>', '').replace('</p>', '')}
      more={item.more}
      dispatch={dispatch}
    />
    )}
  </div>
</>
