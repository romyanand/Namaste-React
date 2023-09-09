import { GITHUB_USER_URL } from '../utils/config'
import React from 'react'


class UserClass extends React.Component{
    constructor(props){

        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://photo.com"
            }
        }
    }

    async componentDidMount(){

        const data = await fetch(GITHUB_USER_URL + this.props.name)

        const json = await data.json()

        this.setState({
            userInfo: json
        })

        console.log(json);

    }

    render(){

        const { name, html_url, avatar_url } = this.state.userInfo

        return(
            <div className='user-card'>
                <img className="avatar" src={avatar_url}/>
                <p>Name : {name}</p>
                <p>Contact : {html_url}</p>
            </div>
        )
    }
}

export default UserClass 