import React from 'react'
import styles from "./Product.module.css"

const Product = ({products}) => {
  return (
    <div>
        {products.map((product) => (
            <>
            <div key={product.id} className={styles.container_product}>
                <h2>Nome do Produto: {product.nome}</h2>
                <p>Valor do Produto: R$ {product.preco.toString().replace(".", ",")}</p>
            </div>
            </>
        ))}
    </div>
  )
}

export default Product