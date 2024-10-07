import React, { useEffect, useState } from 'react'
import './css/PostSubmit.css'
import { useNavigate } from 'react-router-dom'
import { category } from './CategoryData'

type ChildProps = {
    maskClick: () => void;
    text: string ;
    subjects: string[];
}

const PostSubmit: React.FC<ChildProps> = ({maskClick, text, subjects}) => {
    const navigate = useNavigate()

    // 受け取ったカテゴリ配列のIDから単元の値を習得して配列に格納
    const schoolKinds = ['univ', 'high', 'junior', 'prim']
    const findSubject = (id:string): string | null => {
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

    useEffect(() => {
        subjects.map(findSubject)
    },[subjects])
    
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
                <button>投稿する</button>
            </div>
        </div>
        <div id='mask'></div>
    </div>
  )
}

export default PostSubmit
