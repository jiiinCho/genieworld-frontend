import React from "react";
import DotoriIcon from "../icons/dotoriIcon";
import { ProductThumbProps } from "../../interface";
import styles from "./productThumb.module.css";

const ProductThumb = ({ product, onRemoveProduct }: ProductThumbProps) => {
  const { imageURL, price, productName } = product;
  return (
    <li className={styles.item}>
      <img src={imageURL} alt={productName} className={styles.img} />
      <div className={styles.description}>
        <h5 className={styles.productName}>{productName}</h5>
        <p className={styles.price}>
          <DotoriIcon />
          {price}
        </p>
        {onRemoveProduct && (
          <button
            className={styles.removeBtn}
            onClick={() => {
              onRemoveProduct(product.id);
            }}
          >
            Remove
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductThumb;
