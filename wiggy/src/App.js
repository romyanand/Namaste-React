import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import { RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import ResMenu from "./components/ResMenu"


const App = () => {
return (
   <div className='app'>
    <Header />

    {/* Pushing children according to route, only providing the children config inside the createBrowserRouter won't help, only App will be rendered no matter what children route we go on. Hence we need an outlet component */}

    <Outlet />
   </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurants/:id",
        element: <ResMenu />
      }
    ],
    errorElement: <Error />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
