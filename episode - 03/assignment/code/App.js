import React from 'react'
import ReactDOM from 'react-dom/client'


// A Nested header element

// const header = React.createElement("div", {class : 'header'},
//  [React.createElement("h1", {}, "This is an h1 tag"),
//   React.createElement("h2", {}, "This is an h2 tag"),
//    React.createElement("h3",{}, "This is an h3 tag")])



// Same header element using JSX

// const header = (<div className='header'>
//     <h1>This is an h1 tag in JSX</h1>
//     <h2>This is an h2 tag in JSX</h2>
//     <h3>This is an h3 tag in JSX</h3>
// </div>)


// Functional Component of the same JSX
// const Header = (props) => {
//     return(
//         <div className={props.id}>
//             <h1>This is an h1 tag using functional component</h1>
//             <h2>This is an h2 tag using functional component</h2>
//             <h3>This is an h3 tag using functional component</h3>
//         </div>
//     )
// }


//Composition of Components

// const Text = () => {
//     return <p>Bananas are berries, but strawberries are not. In botanical terms, bananas qualify as berries because they are produced from a single ovary, making them a type of fleshy fruit. On the other hand, strawberries are considered aggregate fruits, as they develop from multiple ovaries in a single flower.</p>
// }
// const Header = (props) => {
//     return(
//         <div className={props.id}>
//             <h1>Component Composition</h1>
//             <Text></Text>
//         </div>
//     )
// }


const Header = (props) => {
    return (
        <div className={props.id}>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png'/>

            <div className='search'>
                <input placeholder='Search'/>
            </div>

            <img className='user' src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'/>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header id='header'/>)