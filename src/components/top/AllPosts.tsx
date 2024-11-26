import React, { useEffect, useState } from 'react'
import '../css/AllPosts.css'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../Firebase'
import { findSubject } from '../post/PostSubmit'
import { useNavigate } from 'react-router-dom'
import Filter from './Filter'
import PageTitle from '../public/PageTitle'

const AllPosts = () => {
    // すべての投稿を投稿日時順に表示
    const [posts, setPosts] = useState<React.ReactNode>()

    useEffect(() => {
        const allPosts = async () => {
            const postsQuery = query(
                collection(db, 'posts'),
                orderBy('createdAt', 'desc')
            )

        const querySnapshot = await getDocs(postsQuery)

        const postElements = querySnapshot.docs.map((doc) => {
            const timestamp = doc.data().createdAt
            const date = timestamp.toDate()

            return (
                <div key={doc.id} className='post'>
                    <div className='post-category'>
                        <ul>
                            {doc.data().categories.map((id:string) => (
                                <li key={id} onClick={()=>handleViewPageOfCategoryClick(id)}>
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
        
        setPosts(postElements)
        }
    
        allPosts()
        
    },[])



    // 投稿文をクリックで閲覧ページへ遷移
    const navigate = useNavigate()

    const handleViewPage = (id:string) => {
        const viewId = `/view/${id}`
        navigate(viewId)
    }



    // カテゴリーをクリックでそのカテゴリを条件に検索ページへ
    const handleViewPageOfCategoryClick = (id:string) => {
        navigate('/search', {state: {data: [id], word: ''}})
    }

    

  return (
    <>
    <PageTitle title="トップページ" />
    <div className='all-posts'>
        <Filter />
        <div className='post-area'>
            {posts}
        </div>
    </div>
    </>
    
  )
}

export default AllPosts
