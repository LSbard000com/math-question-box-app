import React from 'react'
import { PageTitleProps } from '../../interface/Interface'
import '../css/PageTitle.css'

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {

  return (
    <div className='pagetitle'>
      <div className='pagetitle-area'>
        <div className='title'>
          <h2>{title}</h2>
        </div>
        <div className='search'>
          <div className='search-area'>
            <input placeholder='検索' />
          </div>
          <div className='search-btn'>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
