import React from 'react'
import { PageTitleProps } from '../../interface/Interface'
import '../css/PageTitle.css'

const PageTitle: React.FC<PageTitleProps> = ({ title }) => { 

  return (
    <div className='pagetitle'>
      <div className='title'>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default PageTitle
