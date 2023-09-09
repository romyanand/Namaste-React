import { useState } from 'react'

const User = (props) => {

    const [count] = useState(0)
    const [count2] = useState(1)
    
    return(
        <div className="user-card">
            <p>Count : {count}</p>
            <p>Count2 : {count2}</p>
            <p>Name : {props.name}</p>
            <p>Location : Hell</p>
            <p>Contact : @romyanand</p>
        </div>
    )
}

export default User