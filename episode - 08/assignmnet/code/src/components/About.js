// import UserClass from "./UserClass"

import User from "./User"

const About = () => {


    return(
        <div className="about">
            <h1>This is about section</h1>
            {/* <User name={"Romy (function)"} /> */}
            <br />
            <hr />
            <br />
            <User name={"romyanand"}/>
        </div>
    )
}

export default About