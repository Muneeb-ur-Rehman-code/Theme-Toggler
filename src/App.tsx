import React, { useState } from "react"
import CardContext from "./Context/CardContext"
import Card from "./Components/Card"



const App = () => {
  const [num, setnum] = useState(0)

  return (
    <CardContext.Provider value={{num, setnum}}>
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>

    </CardContext.Provider>
  )
}

export default App
