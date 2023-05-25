import React from 'react'
import WifiProtectedSetupIcon from '@mui/icons-material/WifiProtectedSetup';
function Pin({ pinSize, pinImg }) {
  return (
    <div className={`pin ${pinSize}`}>
      <img src={pinImg} className='mainPic' />
      <div className='content'>
        <h3 style={{ color: 'white' }}>Click Me</h3>
        <div className='reload' style={{ background: "pink", color: 'red' }}>
          <WifiProtectedSetupIcon />
        </div>

      </div>
    </div>
  )
}

export default Pin