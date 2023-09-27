import React from 'react'
import ReactDOM from 'react-dom/client'

const header = React.createElement("div", {className: "title"}, [React.createElement("h1", {}, "This is an h1 heading"), React.createElement("h2", {}, "This is an h2 heading"), React.createElement("h3", {}, "This is an h3 heading")])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(header)
