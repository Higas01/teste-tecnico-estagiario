import React from 'react'
import styles from "./ProductList.module.css"

const ProductList = ({products}) => {
  return (
    <div className={styles.container}>
        {products.map((product) => (
            <>
            <div key={product.id} className={styles.container_product}>
                <h2>Nome do Produto: {product.nome}</h2>
                <p>Valor: R$ {product.preco.toString().replace(".", ",")}</p>
            </div>
            </>
        ))}
    </div>
  )
}

export default ProductList