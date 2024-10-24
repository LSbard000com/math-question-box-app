import React, { useEffect, useState } from 'react'
import '../css/EditMyQuestion.css'
import { doc, DocumentData, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore'
import { useAuth } from '../ContextProvider'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'

type ChildProps = {
    collectionName: string
    close: () => void
    data: DocumentData | null
    id: string
}

const EditMyQuestion:React.FC<ChildProps> = ({collectionName, close, data, id}) => {
    const navigate = useNavigate()
    const currentUser = useAuth()

    // 受け取ったデータを格納
    const [receiveData, setReceiveData] = useState<DocumentData>()

    useEffect(() => {
        if(data){
            setReceiveData(data)
        }
    },[data])

    useEffect(() => {
        console.log(receiveData?.content)
    },[receiveData])

    // 変更後の質問文を保存
    const [editContent, setEditContent] = useState<string>('')

    const handleEditContent = (e: { target: { value: React.SetStateAction<string> } }) => {
        setEditContent(e.target.value)
    }

    //  変更ボタンクリックで投稿を上書きする
    const handleUpdate = async () => {
        const confirmed = window.confirm('投稿を変更しますか？')
        if(!confirmed){
            return
        }

        if(currentUser){
            try{
                const postsRef = doc(db, collectionName, id)
                await setDoc(postsRef, {
                    content: editContent,
                    createdAt: serverTimestamp()
                }, { merge: true })

                alert("投稿を変更しました。");
                navigate('/')
            } catch(error) {
                if(error instanceof Error){
                    navigate('/error', {state: {message: error.message}})
                } else {
                    navigate('/error', {state: {message: "予期せぬエラーが発生しました"}})
                }
            }
        }
    }

  return (
    <div className='post-edit'>
        <div className='edit-area'>
            <h2>編集画面</h2>
            <div className='non-edit-content'>
                <h3>編集前</h3>
                <div className='content'>
                    {receiveData?.content}
                </div>
            </div>
            <div className='edit-content'>
                <h3>編集後</h3>
                <div className='content'>
                    <textarea onChange={handleEditContent}></textarea>
                </div>
            </div>
            <div className='btn'>
                <button onClick={close}>戻る</button>
                <button onClick={handleUpdate}>変更する</button>
            </div>
        </div>
    </div>
  )
}

export default EditMyQuestion
