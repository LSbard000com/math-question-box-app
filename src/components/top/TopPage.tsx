import React from 'react'
import '../css/TopPage.css'
import Header from '../public/Header'
import PostButton from '../public/PostButton'
import PageTitle from '../public/PageTitle'
import AllPosts from './AllPosts'
import Footer from '../public/Footer'
import Filter from './Filter'

const TopPage = () => {
  return (
    <div className='top-page'>
      <PostButton />
      <div className='header'>
        <Header />
        <PageTitle title='トップページ' />
      </div>
      <div className='main'>
        <div className='filter'>
          <Filter />
        </div>
        <div className='all-posts'>
          <AllPosts />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default TopPage
