import React from 'react'

interface Props {
  children: JSX.Element
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DefaultLayout