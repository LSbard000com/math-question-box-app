import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './css/Error.css'

const ErrorPage = () => {
  const [errorMsg, setErrorMsg] = useState<string>('エラーページです。')

  // 受け取ったエラーメッセージをセット
    const navigate = useNavigate()
    const location = useLocation()


    useEffect(() => {
      if(location.state){
        setErrorMsg(location.state.message)
      }
    },[location.state])


    
  return (
    <div className='error-page'>
      <div className='error-message'>
        <h1>{errorMsg}</h1>
      </div>
      <div className='back-toppage'>
        <p onClick={()=>navigate('/')}>トップページに戻る</p>
      </div>
    </div>
  )
}

export default ErrorPage
