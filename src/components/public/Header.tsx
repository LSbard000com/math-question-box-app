import { useState, useEffect } from 'react'
import '../css/Header.css'
import { useNavigate } from 'react-router-dom'
import imageName from '../img/kkrn_icon_user_6.png'
import { auth, db } from '../../Firebase'
import { doc, getDoc } from 'firebase/firestore'
import { onAuthStateChanged, signOut, User } from 'firebase/auth'
import SearchBar from './SearchBar'

const Header = () => {

  const navigate = useNavigate()


  //ログイン状態を監視
  const [user, setUser] = useState<User|null>(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  })



  // ユーザー情報を取得
  const [username , setUsername] = useState<string|null>(null)

  useEffect(() => {
    const getUsername = async () => {
      try {
        if(user) {
          const uid = user.uid
          const docRef = doc(db, "users", uid)
          const docSnap = await getDoc(docRef)
    
          if(docSnap.exists()){
            setUsername(docSnap.data().username)
          } else {
            setUsername("unknown")
          }
        } else {
          setUsername("ゲスト")
        }
      } catch(error){
        console.error("Error fetching user data:", error);
      }
    } 

    getUsername()
    
  },[user])



  // マイページへ
  const handleMyPage = () => {
    if(user){
      navigate(`/mypage/${user.uid}`)
    } else {
      navigate('/login')
    }
  }



  // サインアウト
  const handleSignOut = () => {
    const confirmSignOut = window.confirm('サインアウトしますか？')
    if(confirmSignOut){
      signOut(auth)
        .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      })
    }
  }

  

  return (
    <div className='header'>
      <div className='header-area'>
        <div className='area-1'>
          <h1 className='title'><a href='/'>みんなの数学質問箱</a></h1>
          <div className='acount'>
              <div className='img-area'>
                < img className='plofile-img' src={imageName} alt='アカウント' />
              </div>
              <div className='user-info'>{username} さん</div>
          </div>
        </div>
        <nav className='header-nav'>
          <ul>
            <li onClick={()=>navigate('/')}>
              トップ
            </li>
            <li onClick={handleMyPage}>
              マイページ
            </li>
            <li>
            {user ? 
              <div onClick={handleSignOut}>
                サインアウト
              </div>
              :
              <div onClick={() => navigate('/login')}>
                サインイン
              </div>
            }
            </li>
            <li onClick={()=>navigate('/post')}>
              質問する
            </li>
          </ul>
          <div className='search-bar'>
            <SearchBar />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
