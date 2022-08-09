import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className={props.variant}>{props.btnText}</button>
  )
}

export default Button