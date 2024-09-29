import React, { useState, useEffect } from 'react'
import './css/SignUp.css'
import { auth } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    // ログイン画面に戻る
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }

    // 入力値をセット
    const [newEmail, setNewEmail] = useState<string>('')
    const [newName, setNewName] = useState<string>('')
    const [newPass, setNewPass] = useState<string>('')
    const [newPassConfirm, setNewPassConfirm] = useState<string>('')

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewEmail(e.target.value)
    }
    const handleNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewName(e.target.value)
    }
    const handlePassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewPass(e.target.value)
    }
    const handlePassConfirmChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setNewPassConfirm(e.target.value)
    }

    // 登録ボタンでアカウント新規登録
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, newEmail, newPass);
            navigate('/');
        } catch (error: unknown) {
            if (error instanceof Error) {
                navigate('/login');
                console.log('登録に失敗しました:', error.message);
            } else {
                console.log('予期しないエラーが発生しました');
            }
        }
    }

    // パスワードが一致しなかったときに確認用にalertクラスを付与
    const [alert , setAlert] = useState<boolean>(false)
    
    useEffect(() => {
        setAlert(newPass === newPassConfirm ? false : true)
    },[newPass, newPassConfirm])

    // 入力完了を検知するカウンター
    const [inputCounter, setInputCounter] = useState<number>(0)
    useEffect(() => {
        let arr: string[] = [newEmail, newName, newPass, newPassConfirm]
        let counter: number = 0
        for(let i :number = 0 ; i < arr.length ; i++){
            if(arr[i] === ''){
                counter = counter + 1
            }
        }
        setInputCounter(counter)
    },[newEmail,newName,newPass,newPassConfirm]) 

    // 登録ボタンの入力可否を制御
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        setIsDisabled(inputCounter !== 0 || alert ? true : false)
    },[inputCounter,alert])

  return (
    <div className='signup'>
        <div className='signup-area'>
            <h1>みんなの数学質問箱</h1>
            <p>- 新規登録 -</p>
            <form>
                <div className='form-group'>
                    <label>メールアドレス</label>
                    <input type="email" id="email" placeholder='e1xample@email.com' onChange={handleEmailChange} />
                </div>
                <div className='form-group'>
                    <label>ユーザー名</label>
                    <input type="text" id="username" placeholder='Sugaku Shitumon' onChange={handleNameChange} />
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
            <div className={`submit ${isDisabled ? '' : 'ok'}`}>
                <button id='signup-btn' disabled={isDisabled} onClick={register}>登録する</button>
            </div>
            <p>
                <span onClick={handleClick}>&lt;&lt;ログイン画面に戻る</span>
            </p>
        </div> 
    </div>
  )
}

export default SignUp
