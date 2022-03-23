import React, { useEffect, useRef, useState } from "react";
import Filter from "../../components/filter/filter";
import Header from "../../components/header/header";
import Product from "../../components/product/product";
import Promotion from "../../components/promotion/promotion";
import Spinner from "../../components/spinner/spinner";
import { useAuth } from "../../context/authProvider";
import { ShopProps, ProductT, CategoryT } from "../../interface";
import styles from "./shop.module.css";

const Shop = ({ genieService }: ShopProps) => {
  const { username } = useAuth();
  const [list, setList] = useState<ProductT[]>([]);
  const [wish, setWish] = useState<ProductT[]>([]);
  const [cart, setCart] = useState<ProductT[]>([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);
    genieService
      .getProducts()
      .then(setList)
      .catch(console.error)
      .finally(() => setLoading(false));
    const cart = genieService.getCartList();
    const wish = genieService.getWishList();
    setCart(cart);
    setWish(wish);
  }, [genieService, username]);

  const onKeywordSearch = (keyword: string) => {
    genieService.onKeywordSearch(keyword).then(setList).catch(console.error);
  };

  const onCategorySearch = (category: CategoryT) => {
    genieService.onCategorySearch(category).then(setList).catach(console.error);
  };

  const onAddCart = (product: ProductT) => {
    const found = cart.find((item) => item.id === product.id);
    if (!found) {
      setCart((prev) => {
        const exist = prev.find((item) => item.id === product.id);
        return exist ? [...prev] : [...prev, product];
      });
      genieService.onAddCart(product);
    }
  };

  const onAddWish = (product: ProductT) => {
    const found = wish.find((item) => item.id === product.id);
    if (!found) {
      setWish((prev) => {
        const exist = prev.find((item) => item.id === product.id);
        return exist ? [...prev] : [...prev, product];
      });
      genieService.onAddWish(product);
    }
  };

  const scrollToTop = () => {
    listRef.current &&
      listRef.current.scrollTo({
        behavior: "smooth",
        top: 0,
      });
  };

  return (
    <div ref={listRef} className={styles.container}>
      {loading && <Spinner />}
      <Header />
      <Promotion />
      <Filter
        cart={cart.length}
        wish={wish ? wish.length : 0}
        onCategorySearch={onCategorySearch}
        onKeywordSearch={onKeywordSearch}
        scrollToTop={scrollToTop}
      />
      {list.length !== 0 ? (
        <ul className={styles.productList}>
          {list.map((item) => (
            <Product
              key={item.id}
              product={item}
              onAddWish={onAddWish}
              onAddCart={onAddCart}
            />
          ))}
        </ul>
      ) : (
        <h3 className={styles.title}>No search result</h3>
      )}
    </div>
  );
};

export default Shop;
