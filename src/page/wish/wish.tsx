import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import ProductThumb from "../../components/productThumb/productThumb";
import styles from "./wish.module.css";
import { ProductT, WishProps } from "../../interface";

const Wish = ({ genieService }: WishProps) => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [wish, setWish] = useState<ProductT[]>([]);
  useEffect(() => {
    username && setWish(genieService.getWishList(username));
  }, [genieService, username]);

  const onRemoveProduct = (id: number) => {
    genieService.onDeleteWish(id);
    setWish((prevList) => prevList.filter((item) => item.id !== id));
  };

  const goToShop = () => {
    navigate("/store");
  };
  return (
    <div className={styles.container}>
      <Header />
      {wish.length === 0 ? (
        <div className={styles.emptyContainer}>
          <h4 className={styles.empty}>Your wishlist is empty!</h4>
          <button className={styles.goShopBtn} onClick={goToShop}>
            Explore
          </button>
        </div>
      ) : (
        <>
          <h4 className={styles.title}>My wishlist</h4>
          <ul className={styles.list}>
            {wish.map((product) => (
              <ProductThumb
                key={product.id}
                product={product}
                onRemoveProduct={onRemoveProduct}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Wish;
