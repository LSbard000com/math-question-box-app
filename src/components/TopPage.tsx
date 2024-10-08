import React from 'react'
import Header from './Header'
import PostButton from './PostButton'
import PageTitle from './PageTitle'
import AllPosts from './AllPosts'
import Footer from './Footer'

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
