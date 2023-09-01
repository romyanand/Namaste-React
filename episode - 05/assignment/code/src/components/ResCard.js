import { CDN_URL } from '../utils/config'

const ResCard = (props) => {

    const name = props.res.info.name
    const rating = props.res.info.avgRating
    const cuisines = props.res.info.cuisines
    const imageId = props.res.info.cloudinaryImageId
    const cost = props.res.info.costForTwo
    const time = props.res.info.sla.deliveryTime

    const url = CDN_URL + imageId

    return(
        <div className='res-card'>
            <div className='res-image' >
                <img src={url} />  
            </div>
            <div className='res-info'>
                <h4>{name}</h4>
                <h4>{rating} stars</h4>
                <p>{cuisines.join(', ')}</p>
                <p>{cost}</p>
                <p>{time} minutes</p>
            </div>  
        </div>
    )
}

export default ResCard