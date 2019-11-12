import React from 'react'

export default ({ accepted, dispatch }) => {
  return <div className={`cookies is-${accepted ? 'accepted' : 'not-accepted'}`}>
    <div className='notification'>
      <div className='container'>
        <nav className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <p className='content cookie-content'>
    This website uses cookies to ensure you get the best experience on our wevsite. Learn more <a aria-label='learn more about cookies' tabIndex='0' href='https://www.cookiesandyou.com/' target='_blank' rel='noopener noreferrer'>Learn more</a>
              </p>
            </div>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <button
                aria-label='dismiss cookie message'
                tabIndex='0'
                className='button'
                onClick={() => {
                  dispatch({
                    type: 'accepted'
                  })
                }}
              >
                  ACCEPT
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
}
