'use client'
import React, { useEffect, useState } from 'react'

const Sum = ({matriz}) => {
      const [value, setValue] = useState();  

     useEffect(() => {
      let sum = 0;
      matriz.forEach(valor => {
        if (valor % 2 == 0) {
        sum += valor;
      }
      })
      setValue(sum);
     }, [])

     return (
    <>
    {value}
    </>
  )
}

export default Sum