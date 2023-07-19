import React from 'react'
import HeaderBar from '../Features/Header/HeaderBar'

interface Props {
  children: JSX.Element
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <HeaderBar />
      {children}
    </div>
  )
}

export default DefaultLayout