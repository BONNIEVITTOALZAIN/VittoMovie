import React from 'react'
import './../css/style.css'

function Adver() {
  return (
    <div className="advertisement-container bg-transparent pt-5">
    <div className="advertisement-row">
      <AdvertisementRow />
      <AdvertisementRow />
      <AdvertisementRow />
      <AdvertisementRow />
      <AdvertisementRow />
      <AdvertisementRow />
    </div>
  </div>
  )
}


function AdvertisementRow() {
    return (
      <div className="advertisement-row-item ">
       <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkBsks90XOA5IXuv5DE0HwJGwSk-V_D3pdQY_P8xlzC7Gtz2CHEGwOlXVEiNWDOCFRGkobahJEvS_atIcdIy3yqSfRwrhx0zeJ6ubAe0PjTuJ0BBz_i1O2N__krMjey9ikMh_JwzrljkNUWyV034V_r2_vGqgnC8SFsE2Zp46bv0E9kOiL8TJ2kb0fvyk/s16000/7-HEADER-820-DESKTOP.gif" alt="image" />
      </div>
    );
  }

export default Adver;
