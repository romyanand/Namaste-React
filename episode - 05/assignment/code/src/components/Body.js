import ResCard from "./ResCard"
import resList from '../utils/mockData'
import { useState } from "react"

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    const [resultRes, setResultRes] = useState("")
    return(
        <div className='body'>
            <div className="search">
                <input placeholder="Search for the restaurants" onChange={(e) => {
                    return setResultRes(e.target.value)
                }}></input>
                <button onClick={() => {
                    const searchResList = listOfRestaurants.filter((res) => {
                        return res.info.name === resultRes
                    })
                    setListOfRestaurants(searchResList)
                }}>Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    setListOfRestaurants(filteredList);

                }}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((restaurant) => {
                    return(
                        <ResCard res={restaurant} key={restaurant.info.id}/>
                    ) 
                })}
            </div>
        </div>
    )
}

export default Body