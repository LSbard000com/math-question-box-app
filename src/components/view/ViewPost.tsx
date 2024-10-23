import React, { useEffect, useState } from 'react'
import Header from '../public/Header'
import PageTitle from '../public/PageTitle'
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, where } from 'firebase/firestore';
import { findSubject } from '../post/PostSubmit'
import imageName from '../img/kkrn_icon_user_6.png'
import '../css/ViewPost.css'
import Footer from '../public/Footer';
import CreateAnswerPost from './CreateAnswerPost';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../Firebase';
import { useAuth } from '../ContextProvider';


const ViewPost = () => {
  const navigate = useNavigate()
  const currentUser = useAuth()

  // ページのuidからポストデータ取得
  const { uid } = useParams<{ uid: string}>();
  const [postUserId, setPostUserId] = useState<string>('')
  const [postContent, setPostContent] = useState<string>('')
  const [postCategory, setPostCategory] = useState<string[]>([])
  
  const getPostData = async () => {
    if(uid){
      try {
        const postDoc = await getDoc(doc(db, 'posts', uid))
        if(postDoc.exists()){
          setPostUserId(postDoc.data().userId)
          setPostContent(postDoc.data().content)
          setPostCategory(postDoc.data().categories)
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

  // 取得したポストデータから投稿したユーザーネームを取得
  const [postUserName, setPostUserName] = useState<string>('')

  const getUserData = async () => {
    if(postUserId){
      const userDoc = await getDoc(doc(db, 'users', postUserId))
      if(userDoc.exists()){
        setPostUserName(userDoc.data().username)
      }
    }
  }
  useEffect(() => {
    getUserData()
  },[postUserId])

  // 回答するボタンで回答作成画面表示
  const [openCreateAnswer, setOpenCreateAnswer] = useState<boolean>(false)
  const handleAnswerButton = () => {
    // 認証状態によってログイン画面へ
    if(currentUser){
      setOpenCreateAnswer(true)
    } else {
      navigate('/login')
    }
    
  }

  // 回答のデータを取得
  const [answerPosts, setAnswerPosts] = useState<any[]>([])

    const getAnswerData = async () => {
        try{
          const q = query(
            collection(db, 'answers'),
            where('postId', '==', uid),
            orderBy('createdAt', 'desc')
          )
          const querySnapshot = await getDocs(q);

          const answerData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))

          setAnswerPosts(answerData)
        } catch(error:unknown) {
          if(error instanceof Error){
              navigate('/error', {state: {message: error.message}})
          } else {
              navigate('/error', {state: {message: "予期せぬエラーが発生しました"}})
          }
        }
    }
  useEffect(() => {
    getAnswerData()
  },[uid])

  // 回答者のユーザー名を取得する関数
  const findAnswerUserName = async (userId: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId))
      if (userDoc.exists()) {
        const userData = userDoc.data()
        return userData.username
      }
    } catch (error) {
      console.error('エラーが発生しました:', error)
      return 'エラーが発生しました'
    }
  }

  // 回答に対してユーザー名を追加した配列を作成
  const [answerPostsWithUsernames, setAnswerPostsWithUsernames] = useState<any[]>([])
  const addUsernames = async () => {
    const updateAnswers = await Promise.all(
      answerPosts.map(async (data) => {
        const username = await findAnswerUserName(data.userId)
        return {...data, username}
      })
    )
    setAnswerPostsWithUsernames(updateAnswers)
  }
  useEffect(() => {
    addUsernames();
  }, [answerPosts]);

  useEffect(() => {
    console.log(answerPostsWithUsernames)
  },[answerPostsWithUsernames])

  return (
    <div>
      <Header />
      <PageTitle title='閲覧ページ'/>
      <div className='post-view-area'>
        <div className='post-header'>
          <div className='user-img'>
            <img src={imageName} />
          </div>
          <div className='user-name'>
            {postUserName} さんの質問
          </div>
        </div>
        <hr />
        <div className='view-content'>
          {postContent}
        </div>
        <div className='post-category'>
          <p>- カテゴリ -</p>
          <ul>
            {
              postCategory.map((id:string) => (
                <li key={id}>
                  {findSubject(id)}
                </li>
              )) 
            }
          </ul>
        </div>
        <hr/>
        <div className='answer-btn'>
          <button onClick={handleAnswerButton}>回答する</button>
        </div>
      </div>
      <div className='answer-area'>
        <div className='answer-header'>
          <p>{answerPostsWithUsernames.length}件の回答</p>
        </div>
        <div className='answer-posts'>
          {answerPostsWithUsernames.length === 0 ?
            <div className='answerer-data'>回答はまだありません。</div>
          :
            answerPostsWithUsernames.map((data) => {
              const timestamp = data.createdAt
              const date = timestamp.toDate()
              return (
                <div key={data.id} className='answerer-data'>
                  <div className='answerer-header'>
                    <div className='username'>{data.username}さんの回答</div>
                    <div className='createdAt'>
                      {date.toLocaleString('ja-JP', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit'   
                      })}
                    </div>
                  </div>
                  <div className='content'>{data.content}</div>
                 
                  <hr/>
                </div>
              )
            } )
          }
        </div>
      </div>
      <div className={openCreateAnswer ? '' : 'create'}>
        <CreateAnswerPost postId={uid} close={()=>setOpenCreateAnswer(false)} content={postContent} />
      </div>
      <Footer />
    </div>
  )
}

export default ViewPost
