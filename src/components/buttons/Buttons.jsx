import React from 'react'

const Buttons = ({value,onClick,disabled}) => {
  return (
    <div>
      <div>
      <button onClick={onClick} className="button" disabled={disabled}>{value}</button>
      </div>
    </div>
  )
}

export default Buttons