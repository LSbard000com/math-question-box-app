import React, { useState, useEffect } from 'react'
import './css/SignUp.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    // ログイン画面に戻る
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    // 入力値をセット
    const [newEmail, setNewEmail] = useState<string>('')
    const [newpass, setNewPass] = useState<string>('')
    const [newpassConfirm, setNewPassConfirm] = useState<string>('')

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewEmail(e.target.value)
    }
    const handlePassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewPass(e.target.value)
    }
    const handlePassConfirmChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewPassConfirm(e.target.value)
    }

    // パスワードが一致しなかったときに確認用にalertクラスを付与
    const [alert , setAlert] = useState<boolean>(false)
    
    useEffect(() => {
        setAlert(newpass === newpassConfirm ? false : true)
    },[newpass, newpassConfirm])

    // メールアドレスとパスワードが入力完了したら登録ボタンを入力にokクラスを付与
    const [ok, setOk] = useState<boolean>(false)

    useEffect(() => {
        if(alert){
            
        }
    },[alert])

  return (
    <div className='signup'>
        <div className='signup-area'>
            <h1>みんなの数学質問箱</h1>
            <p>- 新規登録 -</p>
            <form>
                <div className='form-group'>
                    <label>メールアドレス</label>
                    <input type="email" id="email" placeholder='example@email.com' onChange={handleEmailChange} />
                </div>
                <div className='form-group'>
                    <label>パスワード</label>
                    <input type="password" id="password" onChange={handlePassChange} />
                </div>
                <div className={`form-group ${alert ? 'alert' : ''}`}>
                    <label>パスワード確認用</label>
                    <p>※パスワードが一致しません</p>
                    <input type="password" id="password-confirm"  onChange={handlePassConfirmChange} />
                </div>
            </form>
            <hr/>
            <div className={`submit ${ok ? 'ok' : ''}`}>
                <button id='signup-btn' disabled>登録する</button>
            </div>
            <p>
                <span onClick={handleClick}>&lt;&lt;ログイン画面に戻る</span>
            </p>
        </div> 
    </div>
  )
}

export default SignUp
