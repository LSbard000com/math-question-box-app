import '../css/TopPage.css'
import Header from '../public/Header'
import Footer from '../public/Footer'
import { Outlet } from 'react-router-dom'

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
    </div>
  )
}

export default TopPage
