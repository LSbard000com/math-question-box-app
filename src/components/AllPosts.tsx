import React, { useEffect, useState } from 'react'
import './css/AllPosts.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './Firebase'
import { findSubject } from './PostSubmit'

const AllPosts = () => {
    const [posts, setPosts] = useState<React.ReactNode>()
    const allPosts = async () => {
        const querySnapshot = await getDocs(collection(db, 'posts'))

        const postElements = querySnapshot.docs.map((doc) => {
            const timestamp = doc.data().createdAt
            const date = timestamp.toDate()

            return (
                <div key={doc.id} className='post'>
                    <div className='post-category'>
                        <ul>
                            {doc.data().categories.map((id:string) => (
                                <li>
                                    {findSubject(id)}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                    <div className='post-content'>
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
    useEffect(() => {
        allPosts()
    },[])

  return (
    <div className='all-posts'>
        <div className='post-area'>
        {posts}
        </div>
    </div>
  )
}

export default AllPosts
