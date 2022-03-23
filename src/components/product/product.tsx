import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import HeartEmptyIcon from "../icons/headtEmptyIcon";
import DotoriIcon from "../icons/dotoriIcon";
import CartIcon from "../icons/cartIcon";
import { ProductProps } from "../../interface";
import styles from "./product.module.css";

const Product = ({ product, onAddWish, onAddCart }: ProductProps) => {
  const { imageURL, price, productName, audioURL } = product;

  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState<Howl | undefined>(undefined);

  useEffect(() => {
    if (audioURL) {
      const currAudio = new Howl({
        format: ["mp3"],
        html5: true,
        src: [audioURL],
        volume: 0.3,
      });
      setAudio(currAudio);
      return () => {
        currAudio.off();
      };
    }
  }, [audioURL]);

  const onMusicPlay = () => {
    if (audio) {
      if (play) {
        audio.stop();
        setPlay(false);
      } else {
        setPlay(true);
        audio.play();
      }
    }
  };
  return (
    <li className={styles.product}>
      <img className={styles.productImg} src={imageURL} alt="product" />
      <div className={styles.wishContainer}>
        <button
          onClick={() => {
            onAddWish(product);
          }}
          className={styles.wishList}
        >
          <HeartEmptyIcon />
        </button>
        <span className={styles.productName}>{productName}</span>
      </div>
      {audioURL && (
        <button className={styles.player} onClick={onMusicPlay}>
          {play ? (
            <svg
              width="100%"
              height="100%"
              className={styles.playIcon}
              viewBox="0 0 14 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="4" height="16" rx="2" fill="currentColor" />
              <rect x="10" width="4" height="16" rx="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              width="100%"
              height="100%"
              className={styles.playIcon}
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M22 10.7679C23.3333 11.5377 23.3333 13.4623 22 14.2321L9.25 21.5933C7.91667 22.3631 6.25 21.4008 6.25 19.8612L6.25 5.13878C6.25 3.59918 7.91667 2.63693 9.25 3.40673L22 10.7679Z"
              />
            </svg>
          )}
        </button>
      )}
      <div className={styles.container}>
        <div className={styles.description}>
          <span className={styles.productInfo}>
            <DotoriIcon />
            {price}
          </span>
        </div>
        <button className={styles.cart} onClick={() => onAddCart(product)}>
          <CartIcon />
        </button>
      </div>
    </li>
  );
};
export default Product;
