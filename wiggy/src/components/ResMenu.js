import { useParams } from "react-router-dom"
import useResMenu from "../hooks/useResMenu"
import { useEffect, useState } from "react"

const Menu = () => {
    
    const { id } = useParams()
    const resData = useResMenu(id)
    const [details, setDetails] = useState(null)

    useEffect(() => {
        setDetails(resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }, [resData])
    

    return (
        <div className="res-menu">
            {
                (details !== null && details !== undefined) &&
                    details.map((res) => {
                    return (
                        <ul>
                            <li>{res.card.info.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Menu