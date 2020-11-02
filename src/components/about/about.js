import React from 'react'

export default ({ title = 'Sobre mi', text = '' }) => {
  return (
    <div>
      <h1>Sobre mi</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}
