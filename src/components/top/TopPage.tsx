import '../css/TopPage.css'
import Header from '../public/Header'
import Footer from '../public/Footer'
import { Outlet } from 'react-router-dom'
import backgroundImage from '../img/数学背景.jpg'

const TopPage = () => {
  return (
    <div>
      <div className='top-header'>
        <Header />
      </div>
      <div className='main'>
        <Outlet />
      </div>
      <div className='top-footer'>
        <Footer />
      </div>
      <div className='background'>
        <div className='odd'>
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='even'>
        <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='odd'>
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='even'>
        <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='odd'>
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='even'>
        <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='odd'>
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='even'>
        <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='odd'>
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
        <div className='even'>
        <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
          <img src={backgroundImage} alt='背景画像' />
        </div>
      </div>
    </div>
  )
}

export default TopPage
