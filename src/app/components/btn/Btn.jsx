'use client';
import React from 'react'
import styles from "./Btn.module.css";


const Btn = () => {

  return (
    <input type="button" className={styles.btn} value="Clique" onClick={() => alert("O botão foi clicado")} />
  )
}

export default Btn