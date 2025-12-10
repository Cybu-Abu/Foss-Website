import React from 'react'
import Navbar from './Navbar'
import MainButton from './MainButton'

const MainPage = () => {
  return (
    <div>
      <Navbar/>
  <div className="w-screen absolute top-1/2 left-1/2 text-white  items-center text-center transform -translate-x-1/2 -translate-y-1/2 gap-5">
    <h1 className='w-full font-extrabold text-6xl my-9'>FREE SOFTWARE COMMUNITY <br />of GEC BARTON HILL</h1>
    <p>FOSS Cell is a Technical Society That Promotes And Strengthens The Free And Open Source Software Ecosystem in GECBH. <br /> Join Us To Learn,Build And Share</p>
    <MainButton/>
  </div>
    </div>
  )
}

export default MainPage
