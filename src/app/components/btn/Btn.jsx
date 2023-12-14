'use client';
import React from 'react'
import styles from "./Btn.module.css";


const Btn = () => {

  return (
    <div className={styles.container}>
    <input type="button" className={styles.btn} value="Clique-me!" onClick={() => alert("O botão foi clicado")} />
    </div>
  )
}

export default Btn