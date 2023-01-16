import React, {Suspense} from 'react'
import { useRoutes, Link } from 'react-router-dom';
import router from "./router"
const App: React.FC = () => {
  const outlet = useRoutes(router)
  return (
    <div className="App">
      {outlet}
    </div>
  )
}

export default App
