import React, { useEffect, useState } from 'react'
import Header from '../public//Header'
import '../css/MyPage.css'
import imageName from '../img/kkrn_icon_user_6.png'
import { useParams } from 'react-router-dom'
import { UserProfile } from '../../interface/Interface'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import PageTitle from '../public/PageTitle'
import MyQuestion from './MyQuestion'
import MyAnswer from './MyAnswer'
import Footer from '../public/Footer'
import PostButton from '../public/PostButton'

const MyPage = () => {
  // ユーザーデータの基本情報の表示
  const { uid } = useParams<{ uid: string}>();
  const [userData, setUserData] = useState<UserProfile | null>(null)

  const getUserData = async () => {
    if(uid){
      try {
        const userDoc = await getDoc(doc(db, 'users', uid))
        if(userDoc.exists()){
          setUserData(userDoc.data() as UserProfile)
        } else {
          console.log("ユーザーが見つかりません")
        }
      } catch(error) {
        console.error('Error fetching user data:', error)
      }
    }
  }

  useEffect(() => {
    getUserData()
  },[uid])



  // 投稿と回答の表示の切り替え
  const [activeComponent, setActiveComponent] = useState<'myquestion' | 'myanswer'>('myquestion')

  
  
  return (
    <div>
      <Header />
      <PageTitle title='マイページ' />
      <div className='mypage'>
        <div className='mydata'>
          <div className='user-header'>
            <div className='plofile-img' >
              <img src={imageName} />
            </div>
            <div className='user-info'>
              <div className='useremail'>
                <label>メールアドレス</label>
                <p>{userData?.email}</p>
              </div>
              <div className='username'>
                <label>ユーザーネーム</label>
                <p>{userData?.username}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mypost'>
          <div className='select'>
            <div className={`select-btn ${activeComponent === 'myquestion' ? 'selected' : ''}`} onClick={()=>setActiveComponent('myquestion')}>
              <div>質問</div>
            </div>
            <div className={`select-btn ${activeComponent === 'myanswer' ? 'selected' : ''}`} onClick={()=>setActiveComponent('myanswer')}>
              <div>回答</div>
            </div>
          </div>
          <div className='mypost-display'>
          {activeComponent === 'myquestion' && <MyQuestion uid={uid} />}
          {activeComponent === 'myanswer' && <MyAnswer uid={uid}  />}
          </div>
        </div>
      </div>
      <PostButton />
      <Footer />
    </div>
  )
}

export default MyPage
