import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../../Firebase'
import PageTitle from '../public/PageTitle'
import { findSubject } from '../post/PostSubmit'
import '../css/Search.css'
import Fuse from 'fuse.js'
import { PostData } from '../../interface/Interface'

const Search = () => {
  const navigate = useNavigate()

  
  // 渡された検索条件を取得
  const location = useLocation()
  const [carriedData, setCarriedData] = useState<string[]>([])
  const [carriedWord, setCarriedWord] = useState<string>('')

  useEffect(() => {
    setCarriedData(location.state.data)
    setCarriedWord(location.state.word)
  },[location.state])



  // 検索結果のfirestoreのデータを保管
  const [searchResults, setSearchResults] = useState<PostData[]>([]);



  // 検索件数を取得する関数
  const [searchedHitCount, setSearchedHitCount] = useState<number>(0)
  const getHitCount = (n:number) => {
    setSearchedHitCount(n)
  }


  // firestoreからpostsデータを取得
  const [posts, setPosts] = useState<PostData[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postRef = collection(db, 'posts')
      const querySnapshot = await getDocs(postRef)
      const postData = querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          ...doc.data()
        }
      )) as PostData[]

      setPosts(postData)
    }

    fetchPosts()

  },[carriedWord])
 





  // carriedWordをもとに検索結果を取得する関数
  useEffect(() => {

    // Fuseのインスタンスを設定
    const fuse = new Fuse(posts, {
      keys: ['content'],
      threshold: 0.3
    })


    const getPostsDataFromCarriedWord = (query:string) => {
      if (query.trim()) {
        const results = fuse.search(query).map(result => result.item);
        setSearchResults(results);
        // 検索件数をセット
        getHitCount(results.length)
      } else {
        setSearchResults(posts); // 空のクエリで全件表示
        // 検索件数をセット
        getHitCount(posts.length)
      }
    }

    if(!(carriedWord.length === 0)){
      getPostsDataFromCarriedWord(carriedWord)
    }

  },[carriedWord,posts])



  // carriedDataのidをもつpostデータを取得する関数
  useEffect(() => {
    const getPostDataFromCarriedData = async (data:string[]) => {
      const postRef = collection(db, 'posts')
      const q = query(postRef, where('categories', 'array-contains-any', data))
      const querySnapshot = await getDocs(q) 
      
      // 検索件数をセット
      getHitCount(querySnapshot.size)

      // 検索結果をセット
      const results = querySnapshot.docs.map((doc) => (
        {
          id: doc.id,
          ...doc.data()
        }
      )) as PostData[]

      setSearchResults(results)
    }

  
    if(!(carriedData.length === 0)){
      getPostDataFromCarriedData(carriedData)
    }
  },[carriedData])



  // postDataから検索結果を作成
  const [searchedPosts, setSearchedPosts] = useState<React.ReactNode>()

  useEffect(() => {
    const handleViewPage = (id:string) => {
      const viewId = `/view/${id}`
      navigate(viewId)
    }



    const createQueryPosts = (posts: PostData[]) => {
    const resultPosts = posts.map((doc) => {
        // 取得した投稿日時をDateオブジェクトに変換
        const timestamp = doc.createdAt
        const date = timestamp.toDate()

        // 検索結果の投稿を作成
        return (
          <div key={doc.id} className='post'>
            <div className='post-category'>
                <ul>
                    {doc.categories.map((id:string) => (
                        <li key={id}>
                            {findSubject(id)}
                        </li>
                    ))}
                </ul>
                
            </div>
            <div key={doc.id} onClick={()=>handleViewPage(doc.id)}  className='post-content'>
                {doc.content}
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

      setSearchedPosts(resultPosts)
    }

  
    createQueryPosts(searchResults)
  },[searchResults])



  return (
    <div>
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
    </div>
  )
}

export default Search
