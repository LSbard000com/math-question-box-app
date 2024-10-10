import React, { useEffect, useState } from 'react'
import Header from './Header'
import PageTitle from './PageTitle'
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';
import { PostData, UserProfile } from '../interface/Interface';
import imageName from './img/kkrn_icon_user_6.png'

const ViewPost = () => {
  const navigate = useNavigate()

  // ページのuidからポストデータ取得
  const { uid } = useParams<{ uid: string}>();
  const [postData, setPostData] = useState<PostData | null>(null)
  const [postUserId, setPostUserId] = useState<string>('')
  
  const getPostData = async () => {
    if(uid){
      try {
        const postDoc = await getDoc(doc(db, 'posts', uid))
        if(postDoc.exists()){
          setPostData(postDoc.data() as PostData)
          setPostUserId(postDoc.data().userId)
        }
      } catch(error) {
        if(error instanceof Error){
          navigate('/error', {state: {message: error.message}})
        } else {
          navigate('/error', {state: {message: "予期せぬエラーが発生しました"}})
        }
     }
    } 
  }
  useEffect(() => {
    getPostData()
  },[uid])

  // 取得したポストデータから投稿したユーザー情報を取得
  const [postUser, setPostUser] = useState<UserProfile | null>(null)

  const getUserData = async () => {
    const userDoc = await getDoc(doc(db, 'users', postUserId))
    if(userDoc.exists()){
      setPostUser(userDoc.data() as UserProfile)
    }
  }
  useEffect(() => {
    getUserData()
  },[postUserId])


  return (
    <div>
      <Header />
      <PageTitle title='閲覧ページ'/>
      <div className='viewpost'>
        <div className='post-header'>
          <div className='user-img'>
            <img src={imageName} />
          </div>
          <div className='user-name'>
            {postUser?.username}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPost
