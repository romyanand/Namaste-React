import ResCard from './ResCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {

    const [resList, setResList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [searchRes, setSearchRes] = useState("")

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        console.log(json)
        const recivedList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

        if(recivedList){
            setResList(recivedList)
            setFilteredList(recivedList)
        }
        else{
            setResList([])
            setFilteredList([])
        }

    }
    console.log(resList)

    return ( resList.length === 0 ? <Shimmer /> : 
        <div className="body">
            <div className='user-action'>
                <button className="filter-btn" onClick={() => {
                    const topRatedRes = resList.filter((res) => {
                        return res.info.avgRating > 4;
                    })
                    setFilteredList(topRatedRes)
                }}>Top Rated Restaurants</button>
                <input className="search-bar" placeholder="Search" onChange={(e) => {
                    setSearchRes(e.target.value)
                }}/>
                <button className="search-btn" onClick={() => {
                    const searchedResList = resList.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchRes.toLowerCase())
                    })
                    setFilteredList(searchedResList)
                }}>Search</button>
            </div>
            <div className="res-container">
                {filteredList.map((res) => {
                    return(
                        <ResCard list={res} key={res.info.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Body