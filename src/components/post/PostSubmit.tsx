import React, { useEffect, useState } from 'react'
import '../css/PostSubmit.css'
import { useNavigate } from 'react-router-dom'
import { category } from '../public/CategoryData'
import { useAuth } from '../ContextProvider'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../Firebase'

type ChildProps = {
    maskClick: () => void;
    text: string ;
    subjects: string[];
}

// 受け取ったカテゴリ配列のIDから単元の値を習得して配列に格納

export const findSubject = (id:string): string | null => {
    const schoolKinds = ['univ', 'high', 'junior', 'prim', 'others']
    for(const school of schoolKinds){
        const categories = category[school]
        for(const subjectCategory in categories){
            const result = categories[subjectCategory].find((item: { id: string }) => item.id === id)
            if(result){
                return result.subject
            } 
        }
    }
    return null
}

const PostSubmit: React.FC<ChildProps> = ({maskClick, text, subjects}) => {
    const navigate = useNavigate()

    useEffect(() => {
        subjects.map(findSubject)
    },[subjects])

    // 投稿ボタンでfirestoreにデータを保存
    const currentUser = useAuth()
    console.log(currentUser?.uid)

    const handleSubmit = async () => {
        if(currentUser){
            try{
                await addDoc(collection(db, "posts"),{
                    content: text,
                    userId: currentUser.uid,
                    categories: subjects,
                    createdAt: serverTimestamp(),
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
    <div className='post-submit'>
        <div className='post-confirm'>
            <h2>確認画面</h2>
            <div className='content-area'>
                <h3>質問文</h3>
                <div className='content'>
                    <textarea readOnly value={text}></textarea>
                </div>
            </div>
            <div className='category-area'>
                <h3>カテゴリ</h3>
                <div className='category'>
                    <ul>
                        {subjects.map((id) => (
                            <li className='subject'>{findSubject(id)}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='btn'>
                <button onClick={maskClick}>戻る</button>
                <button onClick={handleSubmit}>投稿する</button>
            </div>
        </div>
        <div className='mask'></div>
    </div>
  )
}

export default PostSubmit
