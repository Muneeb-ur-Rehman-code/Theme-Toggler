import React, { useState } from "react"
import CardContext from "./Context/CardContext"
import Card from "./Components/Card"



const App = () => {
  const [num, setnum] = useState(0)

  return (
    <CardContext.Provider value={{num, setnum}}>
    <div className="m-3">
    <button onClick={()=>{
            setnum(num+1)
          }}>
              Click Me
          </button>
          <Card/>
    </div>
    </CardContext.Provider>
  )
}

export default App
