

import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();

    return(
        <div>
            <h4>Oops!! Something went wrong</h4>
            <p>{err.status}: {err.statusText}</p>
        </div>
    )
}

export default Error