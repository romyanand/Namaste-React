import { useState, useEffect } from "react"

const useResMenu = (id) => {
    const [resData, setResData] = useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await data.json()
        setResData(json?.data)
    }
    return resData
}
export default useResMenu