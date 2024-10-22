import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'

type ChildProps ={
    uid: string | undefined
  }

const MyAnswer:React.FC<ChildProps> = ({uid}) => {
    const navigate = useNavigate()
    // uidから自分の質問投稿を取得
const [myQuestionData, setMyQuestionData] = useState<React.ReactNode>()

    const getMyQuestion = async () => {
        if(uid){
            try{
                const q = query(
                    collection(db, 'posts'),
                    where('userId', '==', uid),
                    orderBy('createdAt', 'desc')
                )
                const querySnapshot = await getDocs(q);

                const myQuestionData = querySnapshot.docs.map((data)=>{
                    const timestamp = data.data().createdAt
                    const date = timestamp.toDate()

                    return (
                        <div key={data.id}>

                        </div>
                    )
                })
            } catch(error:unknown) {
                if(error instanceof Error){
                    navigate('/error', {state: {message: error.message}})
                } else {
                    navigate('/error', {state: {message: "予期せぬエラーが発生しました"}})
                }
            }
        }
    }

    useEffect(() => {
        getMyQuestion()
    },[])
    
  return (
    <div className='questions'>
      {myQuestionData}
    </div>
  )
}

export default MyAnswer
