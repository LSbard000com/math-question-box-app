import React, { useEffect, useState } from 'react'
import { PageTitleProps } from '../../interface/Interface'
import '../css/PageTitle.css'
import { useNavigate } from 'react-router-dom'

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
   // 検索機能
   const [searchWord, setSearchWord] = useState<string>('')
   const inputSearchWord = (e: { target: { value: React.SetStateAction<string> } }) => {
     setSearchWord(e.target.value)
   }
  //  検索ボタンをクリックでsearchWordとともにsearchページへ遷移
  const navigate = useNavigate()
  const handleCarryWord = () => {
    if(!(searchWord.length === 0)){
      navigate('/search', {state: {data: [], word: searchWord}})
    }
  }
 
  useEffect(() => {
    console.log(searchWord.length)
  },[searchWord])
   

  return (
    <div className='pagetitle'>
      <div className='pagetitle-area'>
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className='search'>
          <div className='search-area'>
            <input placeholder='検索' onChange={inputSearchWord} />
          </div>
          <div className='search-btn'>
            <button onClick={handleCarryWord}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
