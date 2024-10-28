import React, { useState } from 'react'
import '../css/CreateAnswerPost.css'
import { useAuth } from '../ContextProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

type ChildProps = {
    postId: string | undefined;
    close: () => void;
    content: string;
}

const CreateAnswerPost: React.FC<ChildProps> = ({postId, close, content}) => {
    const navigate = useNavigate()
    // 回答文を管理
    const [answerContent, setAnswerContent] = useState<string>('')
    const handleAnswerContent = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setAnswerContent(e.target.value)
    }
    // 回答ボタンでfirestore にデータを保存
    const currentUser = useAuth()
    const handleAnswerSubmit = async () => {
        if(currentUser){
            try{
                await addDoc(collection(db, "answers"),{
                    content: answerContent,
                    createdAt: serverTimestamp(),
                    postId: postId,
                    userId: currentUser.uid
                })
                navigate('/')
            } catch(error:unknown) {
                if(error instanceof Error){
                    navigate('/error', {state: {message: error.message}})
                } else {
                    navigate('/error', {state: {message: "予期せぬエラーが発生しました"}})
                }
                
            }
        } else {
            navigate('/login')
        }
    }

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
                    <textarea onChange={handleAnswerContent}></textarea>
                </div>
            </div>
            <div className='btn'>
                <button onClick={close}>戻る</button>
                <button onClick={handleAnswerSubmit}>回答する</button>
            </div>
        </div>
        <div className='mask' onClick={close}></div>
    </div>
  )
}

export default CreateAnswerPost
