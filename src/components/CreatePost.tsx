import React, { useEffect, useState } from 'react'
import Header from './Header'
import './css/CreatePost.css'
import PageTitle from './PageTitle'
import { category } from './CategoryData'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()

  // 投稿文の最低文字数を定義
  const [minNum] = useState<number>(5)

  // カテゴリの最低選択数を定義
  const [minCheck] = useState<number>(1)

  // チェックした項目の管理
  const [selectedSubject, setSelectedSubject] = useState<string[]>([])

  const handleCheckboxChange = (id: string) => {
    if (selectedSubject.includes(id)) {
      setSelectedSubject(selectedSubject.filter(itemId => itemId !== id));
    } else {
      setSelectedSubject([...selectedSubject, id]);
    }
  }

  // カテゴリの詳細チェックボックス欄作成
  const univList = Object.entries(category.univ).map(([cat,subjects]) => (
    <div>
        <label>■ {cat}</label>
        {subjects.map((sub)=>(
          <label 
            key={sub.id} 
            style={{ display: 'inline-flex', margin: '0 0 0 20px' }}
          >
            <input 
              type='checkbox'
              checked={selectedSubject.includes(sub.id)}
              onChange={() => handleCheckboxChange(sub.id)} />{sub.subject}
          </label> 
        ))}
    </div>
  ))

  const highList = Object.entries(category.high).map(([cat,subjects]) => (
    <div>
      <label>■ {cat}</label>
      {subjects.map((sub)=>(
          <label 
            key={sub.id} 
            style={{ display: 'inline-flex', margin: '0 0 0 20px' }}
          >
            <input 
              type='checkbox'
              checked={selectedSubject.includes(sub.id)}
              onChange={() => handleCheckboxChange(sub.id)} />{sub.subject}
          </label> 
        ))}
    </div>
  ))
  
  const juniorList = Object.entries(category.junior).map(([cat,subjects]) => (
    <div>
      <label>■ {cat}</label>
      {subjects.map((sub)=>(
          <label 
            key={sub.id} 
            style={{ display: 'inline-flex', margin: '0 0 0 20px' }}
          >
            <input 
              type='checkbox'
              checked={selectedSubject.includes(sub.id)}
              onChange={() => handleCheckboxChange(sub.id)} />{sub.subject}
          </label> 
        ))}
    </div>
  ))

  const primList = Object.entries(category.prim).map(([cat,subjects]) => (
    <div>
      <label>■ {cat}</label>
      {subjects.map((sub)=>(
          <label 
            key={sub.id} 
            style={{ display: 'inline-flex', margin: '0 0 0 20px' }}
          >
            <input 
              type='checkbox'
              checked={selectedSubject.includes(sub.id)}
              onChange={() => handleCheckboxChange(sub.id)} />{sub.subject}
          </label> 
        ))}
    </div>
  ))

  // カテゴリのチェックによって詳細を表示
  const [openUnivDetail, setOpenUnivDetail] = useState<boolean>(false)
  const handleUnivCheckboxChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenUnivDetail(event.target.checked);
  }

  const [openHighDetail, setOpenHighDetail] = useState<boolean>(false)
  const handleHighCheckboxChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenHighDetail(event.target.checked);
  }

  const [openJuniorDetail, setOpenJuniorDetail] = useState<boolean>(false)
  const handleJuniorCheckboxChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenJuniorDetail(event.target.checked);
  }

  const [openPrimDetail, setOpenPrimDetail] = useState<boolean>(false)
  const handlePrimCheckboxChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenPrimDetail(event.target.checked);
  }

  // 投稿ボタンの入力可否を制御
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  useEffect(() => {
    setIsDisabled(false)
  },[])

  return (
    <div>
      <Header />
      <PageTitle title='質問投稿' />
      <div className='post'>
        <div className='post-group'>
          <label>質問文</label>
          <div className='content'>
            <textarea placeholder='わからない問題や、気になることを投稿してみよう！'></textarea>
            <p>※{minNum}文字以上記入してください。</p>
          </div>
        </div>
        <div className='post-group'>
          <label>カテゴリ</label>
          <div className='category'>
            <label className={openUnivDetail ? 'checked' : ''}>
              <input type='checkBox' onChange={handleUnivCheckboxChange} />
              <p>大学数学</p>
              <div className='detail'>
                {univList}
              </div>
            </label>
            <hr />
            <label className={openHighDetail ? 'checked' : ''}>
              <input type='checkBox' onChange={handleHighCheckboxChange} />
              <p>高校数学</p>
              <div className='detail'>
                {highList}
              </div>
            </label>
            <hr />
            <label className={openJuniorDetail ? 'checked' : ''}>
              <input type='checkBox' onChange={handleJuniorCheckboxChange} />
              <p>中学数学</p>
              <div className='detail' >
                {juniorList}
              </div>
            </label>
            <hr />
            <label className={openPrimDetail ? 'checked' : ''}>
              <input type='checkBox' onChange={handlePrimCheckboxChange} />
              <p>算数</p>
              <div className='detail' >
                {primList}
              </div>
            </label>
            <hr />
            <label>
              <input type='checkBox' />
              <p>その他</p>
            </label>
            <p>※{minCheck}個以上選択してください。</p>
          </div>
        </div>
        <div className='btn'>
          <button className='cancel' onClick={() => navigate('/')}>キャンセル</button>
          <button className='submit' disabled={isDisabled} onClick={() => console.log(selectedSubject)}>投稿する</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
