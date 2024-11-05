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
    <div className='top-page'>
      <div className='header'>
        <Header />
      </div>
      <Outlet />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default TopPage
