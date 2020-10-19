import React, { createContext, useState } from 'react'

export const CarContext = createContext()

export const CarProvider = ({ children }) => {
  const [ car, setCar] = useState([])
  const addToCar = element => {
    setCar([...car, element]) 
  }
  return (
    <CarContext.Provider value={{car, addToCar}}>
      {children }
    </CarContext.Provider>
  )
}