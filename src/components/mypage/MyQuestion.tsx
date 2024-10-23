import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import '../css/MyQuestion.css'

type ChildProps ={
  uid: string | undefined
}

const MyQuestion:React.FC<ChildProps> = ({uid}) => {
  const navigate = useNavigate()

// 質問文クリックで投稿閲覧ページへ
  const handleViewPage = (id:string) => {
    const viewId = `/view/${id}`
    navigate(viewId)
}

  // uidから自分の質問投稿を取得
const [myQuestion, setMyQuestion] = useState<React.ReactNode>()

  const getMyQuestion = async () => {
      if(uid){
        const q = query(
          collection(db, 'posts'),
          where('userId', '==', uid),
          orderBy('createdAt', 'desc')
        )
        const querySnapshot = await getDocs(q);

        const questions = querySnapshot.docs.map((data)=>{
          const timestamp = data.data().createdAt
          const date = timestamp.toDate()

          return (
            <div key={data.id}>
              <div className='question-date'>
                {date.toLocaleString('ja-JP', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit'
                              
                              })
                }
              </div>
              <div className='question-content' onClick={()=>handleViewPage(data.id)}>
                {data.data().content}
              </div>
              <div className='edit'>
                <i className="fa-solid fa-pen" ></i>
                <i className="fa-solid fa-trash" onClick={()=>handleDelete(data.id)}></i>

              </div>
              <hr/>
            </div>
          )
        })

        setMyQuestion(questions)
      } 
  }

  useEffect(() => {
      getMyQuestion()
  },[])

  // 削除ボタンクリックで投稿と回答を削除
   const handleDelete = async (postId:string) => {
    const confirmed = window.confirm("この投稿を削除しますか？この操作は取り消せません。また、この投稿の回答も削除されます。")
    if(!confirmed){
      return
    }
    
      try{
        // 投稿の削除
      const postDocRef = doc(db, 'posts', postId)
      await deleteDoc(postDocRef)

      // 投稿に対する回答を削除
      const answerQuery = query(collection(db, 'answers'),where('postId', '==', postId))
      const querySnapshot = await getDocs(answerQuery)
      const deletePromises = querySnapshot.docs.map((doc) => deleteDoc(doc.ref));
      await Promise.all(deletePromises);

      alert("投稿が削除されました。");
      } catch(error){
        alert("削除中にエラーが発生しました。再度お試しください。");
      }
   }

  return (
    <div className='questions'>
      {myQuestion}
    </div>
  )

}

export default MyQuestion