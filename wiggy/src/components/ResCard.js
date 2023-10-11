import { Link } from "react-router-dom"
const ResCard = (props) => {
    const listOfRestaurants = props.listOfRestaurants
    return(
        <div className="restaurants">
        {
            listOfRestaurants.map((restaurant) => {
                const res  = restaurant.info
                const imageUrl ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + res.cloudinaryImageId
                const cardStyle = {
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  };
                return (
                    <Link className="res-card" key={res.id} to={`/restaurants/${res.id}`} >
                        <div className="res-image" style={cardStyle}></div>
                        <div className="res-text">
                            <h3 className="name">{res.name}</h3>
                            <p>{res.avgRating} stars</p>
                            <p className="cuisines">{res.cuisines.join(", ")}</p>
                            <p>{res.areaName}</p>
                        </div>
                    </Link>
                )
            })   
        } 
        </div>
    )
}
export default ResCard