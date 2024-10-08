import React from 'react'
import Header from './Header'
import PostButton from './PostButton'
import PageTitle from './PageTitle'
import AllPosts from './AllPosts'

const TopPage = () => {
  return (
    <div>
      <Header />
      <PageTitle title='トップページ' />
      <PostButton />
      <AllPosts />
    </div>
  )
}

export default TopPage
