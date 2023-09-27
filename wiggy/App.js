import React from 'react'
import ReactDOM from 'react-dom/client'


const Header = () => {
return (
    <div className='title'>
      <h1>This is an h1 heading</h1>
      <h2>This is an h2 heading</h2>
      <h3>This is an h3 heading</h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header />)
