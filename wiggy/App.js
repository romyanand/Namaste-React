
const appLayout = 
React.createElement("div", {id: "appLayout"}, 

[React.createElement("h1", {id: "heading"}, "This is a heading"),

React.createElement("h2", {id: "sub-heading"}, "This is a sub heading"),

React.createElement("div", {id: "content-box"},

 [React.createElement("p", {id: "par-1"}, "This is a paragraph and it's direct parent is a `div` of `id:content` box which in itself is child of a `div` of `id:appLayout` and sibling of heading and subheading"),

  React.createElement("P", {id:"par-2"}, "This is also a paragraph inside content-box so it's sibling of the above paragraph")])])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(appLayout)