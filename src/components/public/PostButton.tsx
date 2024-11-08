import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/PostButton.css'

const PostButton = () => {
    const navigate = useNavigate()

    const jumpCreatePost = () => {
        navigate('/post')
    }
  return (
    <div  onClick={jumpCreatePost}>
        <div>質問する</div>
    </div>
  )
}

export default PostButton
