import React, { useEffect, useState } from 'react'
import Header from './Header'
import './css/CreatePost.css'
import PageTitle from './PageTitle'
import { category } from './CategoryData'
import { useNavigate } from 'react-router-dom'
import PostSubmit from './PostSubmit'

const CreatePost = () => {
  const navigate = useNavigate()

  // 投稿文の最低文字数を定義
  const [minNum] = useState<number>(5)

  // 投稿文の内容を保存
  const [text, setText] = useState<string>('')
  const handleInput = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value)
  } 

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

  // その他ボタン
  const handleOtherClick = () => {
    if (selectedSubject.includes('O00')) {
      setSelectedSubject(selectedSubject.filter(itemId => itemId !== 'O00'));
    } else {
      setSelectedSubject([...selectedSubject, 'O00']);
    }
  }

  // 投稿ボタンの入力可否を制御
  const [textChecker, setTextChecker] = useState<boolean>(false)
  useEffect(() => {
    setTextChecker(text.length < minNum ? false : true)
  },[text])

  const [selctedChecker, setSelectedChecker] = useState<boolean>(false)
  useEffect(() => {
    setSelectedChecker(selectedSubject.length === 0 ? false : true)
  },[selectedSubject])

  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  useEffect(() => {
    setIsDisabled(textChecker && selctedChecker ? false : true)
  },[textChecker, selctedChecker])

  // 投稿ボタンクリックで確認画面へ
  const [jumpConfirm, setJumpConfirm] = useState<boolean>(true)
  const handleClickcConfirm = () => {
    setJumpConfirm(true)
  }

  return (
    <div>
      <Header />
      <PageTitle title='質問投稿' />
      <div className={jumpConfirm ? '' : 'confirm'}>
        <PostSubmit maskClick={()=>setJumpConfirm(false)} text={text} subjects={selectedSubject} />
      </div>
      <div className='post'>
        <div className='post-group'>
          <label className='post-title'>質問文</label>
          <div className='content'>
            <textarea placeholder='わからない問題や、気になることを投稿してみよう！' onChange={handleInput}></textarea>
            <p>※{minNum}文字以上記入してください。</p>
          </div>
        </div>
        <div className='post-group'>
          <label className='post-title'>カテゴリ</label>
          <div className='category'>
            <label className={openUnivDetail ? 'checked' : ''}>
              <input type='checkbox' onChange={handleUnivCheckboxChange} />
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
              <input type='checkBox' checked={selectedSubject.includes('O00')} onChange={handleOtherClick} />
              <p>その他</p>
            </label>
            <p>※{minCheck}個以上選択してください。</p>
          </div>
        </div>
        <div className={`btn ${isDisabled ? '' : 'ok'}`}>
          <button className='cancel' onClick={() => navigate('/')}>キャンセル</button>
          <button className='submit' disabled={isDisabled} onClick={handleClickcConfirm} >確認する</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
