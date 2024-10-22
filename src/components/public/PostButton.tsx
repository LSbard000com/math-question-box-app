import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/PostButton.css'

const PostButton = () => {
    const navigate = useNavigate()

    const jumpCreatePost = () => {
        navigate('/post')
    }
  return (
    <div className='navbutton' onClick={jumpCreatePost}>
        <span></span>
        <span></span>
    </div>
  )
}

export default PostButton
