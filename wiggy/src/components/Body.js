import { useEffect, useState } from "react"
import ResCard from "./ResCard"
import Shimmer from './Shimmer'
const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [copyListOfRestaurants, setCopyListOfRestaurants] = useState([])
    const [searchRes, setSearchRes] = useState([])

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        const finalList = jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
        console.log(finalList)
        setListOfRestaurants(finalList)
        setCopyListOfRestaurants(finalList)
    }
    return(
        listOfRestaurants.length === 0 ? <Shimmer /> : 
        <div className="body">
            <div className="top">
                <button onClick={() => {
                    const topRestaurants = listOfRestaurants.filter((res) => {
                        return res.info.avgRating > 4
                    })
                    console.log(topRestaurants)
                    setCopyListOfRestaurants(topRestaurants)
                }}>Top Rated Restaurants</button>
                <input className="search" type='text' placeholder='Search for food and restaurant' onChange={(e) => {
                    setSearchRes(e.target.value)
                }}/>
                <h3 className="search-btn" onClick={() => {
                    console.log(searchRes)
                    const requiredResList = listOfRestaurants.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                    })
                    console.log(requiredResList)
                    setCopyListOfRestaurants(requiredResList)
                }}>Search</h3>
            </div>
            <ResCard listOfRestaurants={copyListOfRestaurants}/>
        </div>
    )
}
export default Body