'use client'
import React, { useEffect, useState } from 'react'
import styles from "./Count.module.css"


const Count = () => {

    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(10)
    }, [])

  return (
    <div className={styles.container}>
        <h1 className={styles.display}>{value}</h1>  
        <input type="button" value="Aumentar" className={styles.btn} onClick={() => setValue(prevValue => prevValue + 1)} />
        <input type="button" value="Diminuir" className={styles.btn} onClick={() => setValue(prevValue => prevValue - 1)} />
    </div>
  )
}

export default Count