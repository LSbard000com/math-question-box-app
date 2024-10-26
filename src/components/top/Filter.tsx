import React, { useState } from 'react'
import '../css/Filter.css'
import { category, Item } from '../public/CategoryData'

type CatArry = {[key: string] : Item[]}

const Filter = () => {
  // カテゴリによってチェックボックスのリストを作る関数
  const createList = (catName:{ [key: string] : Item[] }) => {
    const checkboxList = Object.entries(catName).map(([cat,subjects]) => (
      <div className='cat-list'>
        <div>{cat}</div>
        <ul>
          {subjects.map((sub)=>(
            <li>
              <input type='checkbox' />{sub.subject}
            </li>
          ))}
        </ul>
      </div>
    ))

    return checkboxList
  }

  // カテゴリークリックでサブジェクトを表示
  const [openUniv, setOpenUniv] = useState<boolean>(false)
  const [openHigh, setOpenHigh] = useState<boolean>(false)
  const [openJunior, setOpenJunior] = useState<boolean>(false)
  const [openPrim, setOpenPrim] = useState<boolean>(false)
  const [openOthers, setOpenOthers] = useState<boolean>(false)
  
  const handleOpenUniv = () => setOpenUniv(!openUniv)
  const handleOpenHigh = () => setOpenHigh(!openHigh)
  const handleOpenJunior = () => setOpenJunior(!openJunior)
  const handleOpenPrim = () => setOpenPrim(!openPrim)
  const handleOpenOthers = () => setOpenOthers(!openOthers)

  return (
    <div className='filter'>
      <div className='header'>
        <h3>フィルタ</h3>
      </div>
      <div className='search-criteria'>
        <div className={`category ${openUniv ? 'open' : ''}`}>
          <div className='cat-name'>
            <div>大学数学</div>
            <p onClick={handleOpenUniv}>&gt;</p>
          </div>
          <div className='subjects'>
           {createList(category.univ)}
          </div>
          <hr style={{width: '90%'}}/>
        </div>
        <div className={`category ${openHigh ? 'open' : ''}`}>
          <div className='cat-name'>
            <div>高校数学</div>
            <p onClick={handleOpenHigh}>&gt;</p>
          </div>
          <div className='subjects'>
           {createList(category.high)}
          </div>
          <hr style={{width: '90%'}}/>
        </div>
        <div className={`category ${openJunior ? 'open' : ''}`}>
          <div className='cat-name'>
            <div>中学数学</div>
            <p onClick={handleOpenJunior}>&gt;</p>
          </div>
          <div className='subjects'>
           {createList(category.junior)}
          </div>
          <hr style={{width: '90%'}}/>
        </div>
        <div className={`category ${openPrim ? 'open' : ''}`}>
          <div className='cat-name'>
            <div>算数</div>
            <p onClick={handleOpenPrim}>&gt;</p>
          </div>
          <div className='subjects'>
           {createList(category.prim)}
          </div>
          <hr style={{width: '90%'}}/>
        </div>
        <div className={`category ${openOthers ? 'open' : ''}`}>
          <div className='cat-name'>
            <div>その他</div>
            <p onClick={handleOpenOthers}>&gt;</p>
          </div>
          <div className='subjects'>
           {createList(category.others)}
          </div>
          <hr style={{width: '90%'}}/>
        </div>
      </div>
      <div className='search-btn'>
        <button>絞り込み検索</button>
      </div>
    </div>
  )
}

export default Filter
