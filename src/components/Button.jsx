import React from 'react'

const Button = (props) => {
  return (
    <button type="button" className="btn hero__left__content--button1 px-4">{props.title}</button>
  )
}

export default Button