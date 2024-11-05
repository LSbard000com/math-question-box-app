import React, { useState } from 'react'
import '../css/Login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase'

const Login = () => {
    const navigate = useNavigate();


    // メールアドレスとパスワードの入力値をセット
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPass(e.target.value)
    }



    // 未入力項目がある場合にalertクラスを付与
    const [alert, setAlert] = useState<boolean>(false)



    // ログインボタンクリックで認証
    const login = async () => {
        if(email !== '' && pass !== ''){
            setAlert(false)
            try {
                await signInWithEmailAndPassword(auth, email, pass)
                navigate('/')
            } catch(error:unknown) {
                if (error instanceof Error) {
                    setLoginErrorMsg('ログインに失敗しました');
                    navigate('/login');
                } else {
                    navigate('/error', {state: {message: '予期せぬエラーが発生しました。'}});
                }
            }
        } else {
            setAlert(true)
            setLoginErrorMsg('')
        } 
    }



    // ログイン失敗時にメッセージを表示
    const [loginErrorMsg, setLoginErrorMsg] = useState<string>('')



    // 新規登録ボタンでサインインページへ遷移
    const handleClick = () => {
    navigate('/signup')
    }

    
  return (
    <div className='login'>
        <div className='login-area'>
            <h1>みんなの数学質問箱</h1>
            <p>- ログイン -</p>
            <div className='login-error'>
                <p>{loginErrorMsg}</p>
            </div>
            <form className={alert ? 'alert' : ''}>
                <div className='form-group'>
                    <label>メールアドレス</label>
                    <input type="email" id="email" placeholder='example@email.com' onChange={handleEmailChange}/>
                </div>
                <div className='form-group'>
                    <label>パスワード</label>
                    <input type="password" id="password" onChange={handlePassChange}/>
                </div>
                <p>※未入力項目があります</p>
            </form>
            <hr/>
            <div className='submit'>
                <button id='signup-btn' onClick={handleClick}>新規登録</button>
                <button id='login-btn' onClick={login}>ログイン</button>
            </div>
            <p>
                <span onClick={()=>navigate('/')}>&lt;&lt;トップページに戻る</span>
            </p>
        </div> 
    </div>
  )
}

export default Login
