import React, { useState, useEffect } from "react";
import { ProductT, CartProps, CharacterItem } from "../../interface";
import styles from "./cart.module.css";
import Header from "../../components/header/header";
import ProductThumb from "../../components/productThumb/productThumb";
import Receipt from "../../components/receipt/receipt";
import { useAuth } from "../../context/authProvider";
import Alert from "../../components/alert/alert";

const Cart = ({ genieService }: CartProps) => {
  const { username, id } = useAuth();
  const [list, setList] = useState<ProductT[]>([]);
  const [checkout, setCheckout] = useState(false);
  const [dotori, setDotori] = useState(0);
  const [ownedCharacters, setOwnedCharacters] = useState<
    CharacterItem[] | undefined
  >(undefined);
  const [alertMsg, setAlert] = useState("");
  const [timeout, setAlertTimout] = useState<NodeJS.Timeout | null>(null);

  const onAlert = (msg: string) => {
    setAlert(msg);
    const timeoutId = setTimeout(() => {
      setAlert("");
    }, 2000);
    setAlertTimout(timeoutId);
  };

  const onAlertClose = () => {
    setAlert("");
    timeout && clearTimeout(timeout);
  };

  useEffect(() => {
    if (username) {
      setList(genieService.getCartList());
      genieService.getGenie(username).then((data) => setDotori(data.dotori));
    }
  }, [genieService, username]);

  useEffect(() => {
    username &&
      genieService
        .getCharacters(username)
        .then(setOwnedCharacters)
        .catch((err) => {
          console.log(err);
          onAlert("Fail to load data, please try it later");
        });
  }, [genieService, username]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [timeout]);

  const onCheckout = (updatedDotori: number) => {
    setCheckout(true);
    if (username && username !== "genie") {
      genieService.updateGenie(username, { dotori: updatedDotori });
      genieService.addCharacters(username, list, id).catch((err) => {
        console.log(err);
        onAlert("Fail to update purchase data, please try it later");
      });
      genieService.emptyCart();
    }
  };

  const onRemoveProduct = (id: number) => {
    genieService.onDeleteCart(id);
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      {alertMsg && (
        <Alert alertMsg={alertMsg} warning={true} onClose={onAlertClose} />
      )}
      <Header />
      {checkout ? (
        <>
          <h3 className={styles.complete}>Thank you for your purchase!</h3>
          <h5 className={styles.shopList}>Your item(s) :</h5>
          <ul className={styles.purchased}>
            {list.map((item) => (
              <ProductThumb key={item.id} product={item} />
            ))}
          </ul>
        </>
      ) : (
        <section className={styles.section}>
          <article className={styles.receiptMobile}>
            <Receipt
              currDotori={dotori}
              list={list}
              onCheckout={onCheckout}
              ownedCharacters={ownedCharacters}
            />
          </article>
          <ul className={styles.list}>
            {list.length === 0 ? (
              <h3 className={styles.empty}>Your cart is empty</h3>
            ) : (
              list.map((item) => (
                <ProductThumb
                  key={item.id}
                  product={item}
                  onRemoveProduct={onRemoveProduct}
                />
              ))
            )}
          </ul>
          <article className={styles.receipt}>
            <Receipt
              currDotori={dotori}
              list={list}
              onCheckout={onCheckout}
              ownedCharacters={ownedCharacters}
            />
          </article>
        </section>
      )}
    </div>
  );
};

export default Cart;
