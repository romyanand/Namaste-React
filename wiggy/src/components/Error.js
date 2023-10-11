import { useRouteError } from 'react-router-dom'
const Error = () => {
    const e = useRouteError()
    return(
        <div className="error-page">
            <p>Oops! There is an unexpected error</p>
            <i>{e.statusText || e.message}</i>
        </div>
    )
}

export default Error