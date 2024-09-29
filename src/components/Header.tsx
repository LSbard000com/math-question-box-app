import React from 'react'
import './css/Header.css'
import { useNavigate } from 'react-router-dom'
import imageName from './img/kkrn_icon_user_6.png'
import { app } from './Firebase'

// ログインしているユーザー情報を取得



const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <div className='header-area'>
        <h1 className='title'><a href='/'>みんなの数学質問箱</a></h1>
        <nav className='header-nav'>
          <ul>
            <li><a href='/'>トップ</a></li>
            <li><a href='/'>マイページ</a></li>
          </ul>
          <div className='acount'>
            <div className='img-area'>
              <img className='plofile-img' src={imageName} alt='アカウント' />
            </div>
            <div className='user-info'> unknown さん</div>
        </div>
        </nav>
      </div>
      
    </div>
  )
}

export default Header
