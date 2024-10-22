import React, { useEffect, useState } from 'react'
import Header from '../public//Header'
import '../css/MyPage.css'
import imageName from '../img/kkrn_icon_user_6.png'
import { useParams } from 'react-router-dom'
import { UserProfile } from '../../interface/Interface'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import PageTitle from '../public/PageTitle'

const MyPage = () => {
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
        
      </div>
    </div>
  )
}

export default MyPage
