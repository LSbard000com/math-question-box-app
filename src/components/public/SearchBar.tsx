import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SearchBar.css'

const SearchBar = () => {
    // 検索機能
   const [searchWord, setSearchWord] = useState<string>('')
   const inputSearchWord = (e: { target: { value: React.SetStateAction<string> } }) => {
     setSearchWord(e.target.value)
   }
  //  検索ボタンをクリックでsearchWordとともにsearchページへ遷移
  const navigate = useNavigate()
  const handleCarryWord = () => {
    if(!(searchWord.length === 0)){
      navigate('/search', { state: {data: [], word: searchWord}})
    }
  }
   

  return (
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
  )
}

export default SearchBar
