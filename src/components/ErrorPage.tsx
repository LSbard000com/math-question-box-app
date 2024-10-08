import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { message } = location.state || {}
  return (
    <div>
      {message}
      <div className='back=toppage'>
        <p onClick={()=>navigate('/')}>トップページに戻る</p>
      </div>
    </div>
  )
}

export default ErrorPage
