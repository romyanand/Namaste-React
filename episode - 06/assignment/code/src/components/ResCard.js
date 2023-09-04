import { CDN_URL } from '../utils/config'

const ResCard = (props) => {
    const listOfRestaurants = props.list
    const name = listOfRestaurants.info.name
    const rating = listOfRestaurants.info.avgRating
    const cuisines = listOfRestaurants.info.cuisines
    const imageId = listOfRestaurants.info.cloudinaryImageId
    const cost = listOfRestaurants.info.costForTwo
    const time = listOfRestaurants.info.sla.deliveryTime
    const url = CDN_URL + imageId

    return (
        <div className="res-card">
            <div className='res-image'>
                <img src={url}/>
            </div>
            <div className='res-info'>
                <h4>{name}</h4>
                <h4>{rating} stars</h4>
                <h4>{cuisines.join(', ')}</h4>
                <p>{cost}</p>
                <p>{time} minutes</p>
            </div>
        </div>
    )
}

export default ResCard