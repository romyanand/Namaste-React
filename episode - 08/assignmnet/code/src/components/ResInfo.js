import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'

const ResInfo = () => {

    const [resInfo, setResinfo] = useState(null)

    const { resId } = useParams();

    useEffect(() => {
            fetchInfo();
    }, [])


    const fetchInfo = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json()

        const recivedInfo = json.data

        if(recivedInfo){

            setResinfo(recivedInfo)
        }
    }

    // console.log(resInfo)


    if(!resInfo){
        return <Shimmer />
    }


    const { name, cuisines, areaName, avgRating, costForTwo, totalRatingsString } = resInfo?.cards[0]?.card?.card?.info
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    console.log(itemCards)

    

    return(
        <div className="res-info">
            <h1>Here goes the information about {name}</h1>
            <hr></hr>
            <br></br>
            <p>{cuisines.join(', ')}</p>
            <p>{areaName}</p>
            <p>{avgRating}</p>
            <p>&#8377;{costForTwo / 100 } for two</p>
            <p>{totalRatingsString}</p>
            <br />
            <br />
            <h2>Menu</h2>
            <hr />
            {
                itemCards && itemCards.map((items) => {
                        return (
                            <li key={items.card.info.id}>{items?.card?.info?.name} - Rs {items?.card?.info?.price ? items?.card?.info?.price / 100 : items?.card?.info?.defaultPrice / 100}</li>

                        )
                    })
            }
        </div>
    )
}

export default ResInfo