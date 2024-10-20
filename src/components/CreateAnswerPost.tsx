import React, { useState } from 'react'
import './css/CreateAnswerPost.css'

type ChildProps = {
    postId: string | undefined;
    close: () => void;
    content: string;
}

const CreateAnswerPost: React.FC<ChildProps> = ({postId, close, content}) => {
    

  return (
    <div className='create-answer'>
        <div className='answer-area'>
            <h2>回答作成画面</h2>
            <div className='question-content-area'>
                <h3>質問文</h3>
                <div className='question-content'>
                    {content}
                </div>
            </div>
            <div className='answer-content-area'>
                <h3>回答文</h3>
                <div className='answer-content'>
                    <textarea></textarea>
                </div>
            </div>
            <div className='btn'>
                <button onClick={close}>戻る</button>
                <button>回答する</button>
            </div>
        </div>
        <div className='mask' onClick={close}></div>
    </div>
  )
}

export default CreateAnswerPost
