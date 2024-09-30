import React from 'react'
import { useContext } from 'react'
import CardContext from '../Context/CardContext'

const Card = () => {
    const  {num , setnum}  = useContext(CardContext)
  return (
    <div>
        {num}     
    </div>
  )
}

export default Card
