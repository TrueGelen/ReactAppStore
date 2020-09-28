import React from 'react'
import withStore from '../../hocs/withStore'

function homePage() {
  return (
    <div>HomePage
      <img src={'ReactAppStore/dist/assets/imgs/televisions/samsung/T32E310EX/front.webp'} />
      <img src={'ReactAppStore/dist/assets/imgs/televisions/samsung/T32E310EX/front.png'} />
    </div>
  )
}

export default withStore(homePage)