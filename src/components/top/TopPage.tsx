import React from 'react'
import Header from '../public/Header'
import PostButton from '../public/PostButton'
import PageTitle from '../public/PageTitle'
import AllPosts from './AllPosts'
import Footer from '../public/Footer'

const TopPage = () => {
  return (
    <div>
      <Header />
      <PageTitle title='トップページ' />
      <PostButton />
      <AllPosts />
      <Footer />
    </div>
  )
}

export default TopPage
