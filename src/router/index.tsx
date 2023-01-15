import React, { Suspense, lazy } from "react"
import { Navigate } from "react-router-dom"
const Home = lazy(()=>import("@/views/Home"))
const Page1 = lazy(()=>import("@/views/Page1"))
const Page2 = lazy(()=>import("@/views/Page2"))

const wrap = (elem:JSX.Element)=>(
    <Suspense fallback={<div>Loading...</div>}>
        {elem}    
    </Suspense>
)

const routes =[
    {
        path:"/",
        element: <Navigate to="/page1"/>
    },
    {
        path:"/",
        element: wrap(<Home />),
        children:[
            {
                path:"page1",
                element: wrap(<Page1 />)
            },
            {
                path:"page2",
                element: wrap(<Page2 />)
            },
        ]
    }
]
export default routes