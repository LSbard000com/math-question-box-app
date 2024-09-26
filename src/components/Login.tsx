import React, { useState } from 'react'
import './css/Login.css'
import { getAuth, signInWithEmailAndPassword, Auth,} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from './Firebase'

const auth: Auth = getAuth(app);

const Login = () => {
    // メールアドレスとパスワードの入力値をセット
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPass(e.target.value)
    }

    // ログインボタンクリックで認証
    const login = async () => {
        if(email !== '' && pass !== ''){
            try {
                await signInWithEmailAndPassword(auth, email, pass)
                navigate('/')
            } catch(error:unknown) {
                if (error instanceof Error) {
                    navigate('/login');
                    console.log('ログインに失敗しました:', error.message);
                } else {
                    console.log('予期しないエラーが発生しました');
                }
            }
        } else {
            console.log('未入力項目があります')
        } 
    }



    // 新規登録ボタンでサインインページへ遷移
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/signup')
}
  return (
    <div className='login'>
        <div className='login-area'>
            <h1>みんなの数学質問箱</h1>
            <p>- ログイン -</p>
            <form>
                <div className='form-group'>
                    <label>メールアドレス</label>
                    <input type="email" id="email" placeholder='example@email.com' onChange={handleEmailChange}/>
                </div>
                <div className='form-group'>
                    <label>パスワード</label>
                    <input type="password" id="password" onChange={handlePassChange}/>
                </div>
            </form>
            <hr/>
            <div className='submit'>
                <button id='signup-btn' onClick={handleClick}>新規登録</button>
                <button id='login-btn' onClick={login}>ログイン</button>
            </div>
        </div> 
    </div>
  )
}

export default Login
