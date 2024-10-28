import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../Firebase'
import Header from '../public/Header'
import PageTitle from '../public/PageTitle'
import { findSubject } from '../post/PostSubmit'
import '../css/Search.css'
import Footer from '../public/Footer'

const Search = () => {
  // 渡された検索条件の配列を取得
  const location = useLocation()
  const [carriedData, setCarriedData] = useState<string[]>([])

  useEffect(() => {
    if(!(location.state.data.length === 0)){
      setCarriedData(location.state.data)
    }
  })



  // carriedDataのidをもつpostデータを取得
  const [searchedPosts, setSearchedPosts] = useState<React.ReactNode>()
  const [searchedHitCount, setSearchedHitCount] = useState<number>(0)

  const getPostDataFromCarriedData = async () => {
    const postRef = collection(db, 'posts')
    const q = query(postRef, where('categories', 'array-contains-any', carriedData))
    const querySnapshot = await getDocs(q) 
    
    // 検索件数をセット
    const hitCount = querySnapshot.size
    setSearchedHitCount(hitCount)

    // 検索結果のポストデータを作成
    const posts = querySnapshot.docs.map((doc) => {
      const timestamp = doc.data().createdAt
      const date = timestamp.toDate()

      return (
        <div key={doc.id} className='post'>
          <div className='post-category'>
              <ul>
                  {doc.data().categories.map((id:string) => (
                      <li key={id}>
                          {findSubject(id)}
                      </li>
                  ))}
              </ul>
              
          </div>
          <div key={doc.id} onClick={()=>handleViewPage(doc.id)}  className='post-content'>
              {doc.data().content}
          </div>
          <div className='post-time'>
              {date.toLocaleString('ja-JP', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                  
                  })
                  }
          </div>
          <hr style={{ marginBottom: '20px'}}/>
        </div>
      )
    })
    setSearchedPosts(posts)
  }

  useEffect(() => {
    if(!(carriedData.length === 0)){
      getPostDataFromCarriedData()
    }
  },[carriedData])



  // 投稿文をクリックで閲覧ページへ
  const navigate = useNavigate()
  const handleViewPage = (id:string) => {
    const viewId = `/view/${id}`
    navigate(viewId)
  }



  return (
    <div>
      <Header />
      <PageTitle title='検索結果' />
      <div className='searched-number'>
        <div>
          検索件数： {searchedHitCount}件
        </div>
      </div>
      <div className='searched'>
        {searchedHitCount === 0 ?
          <div>
            検索に一致する質問はありませんでした。
          </div>
        :
          searchedPosts
        }
      </div>
      <Footer />
    </div>
  )
}

export default Search
