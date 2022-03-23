import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Branding from "../../assets/images/branding.svg";
import { useAuth } from "../../context/authProvider";
import CloseButton from "../closeButton/closeBtn";
import AccordionIcon from "./accordionIcon";
import styles from "./header.module.css";

const Header = () => {
  const { username, signOut } = useAuth();

  const navigate = useNavigate();
  const [expand, setExpand] = useState<boolean>(false);

  const refreshPage = () => {
    setExpand(false);
    navigate("/");
  };
  const goToShop = () => {
    setExpand(false);
    navigate("/store");
  };

  const goToAbout = () => {
    setExpand(false);
    navigate("/about");
  };

  const goToSign = () => {
    setExpand(false);
    navigate("/signin");
  };

  const goToGenieworld = () => {
    setExpand(false);
    navigate("/genieworld");
  };

  const onExpand = () => {
    expand ? setExpand(false) : setExpand(true);
  };

  return (
    <header className={styles.header}>
      <button className={styles.brandingBtn} onClick={refreshPage}>
        <img src={Branding} alt="logo" className={styles.branding} />
      </button>

      <div className={styles.accordionContianer}>
        <button className={styles.accordionBtn} onClick={onExpand}>
          {expand ? <CloseButton /> : <AccordionIcon />}
        </button>
      </div>
      <ul className={`${styles.list} ${expand && styles.active}`}>
        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={goToGenieworld}>
            Genieworld
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={goToShop}>
            Store
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.itemBtn} onClick={goToAbout}>
            About
          </button>
        </li>
        <li className={styles.item}>
          {username === "genie" ? (
            <button className={styles.itemBtn} onClick={goToSign}>
              Sign in &#47;<span className={styles.signUp}> Sign up</span>
            </button>
          ) : (
            <button
              className={styles.itemBtn}
              onClick={() => signOut && signOut()}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};
export default Header;
