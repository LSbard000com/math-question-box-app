import React from 'react'
import '../css/TopPage.css'
import Header from '../public/Header'
import PageTitle from '../public/PageTitle'
import AllPosts from './AllPosts'
import Footer from '../public/Footer'
import Filter from './Filter'
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
      <div className='background'></div>
    </div>
  )
}

export default TopPage
