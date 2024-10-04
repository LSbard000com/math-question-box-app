import React from 'react'
import { PageTitleProps } from '../interface/Interface'

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    const titleStyle = {
        width: '1000px',
        height: '50px',
        margin: '20px auto',
    }

  return (
    <div>
      <h2 style={titleStyle}>{title}</h2>
    </div>
  )
}

export default PageTitle
