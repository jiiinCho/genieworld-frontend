import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FilterExpand from "../filterExpand/filterExpand";
import ArrowUpIcon from "../icons/arrowUpIcon";
import CategoryIcon from "../icons/categoryIcon";
import SearchIcon from "../icons/searchIcon";
import { FilterProps, CategoryT } from "../../interface";
import styles from "./filter.module.css";
import { useAuth } from "../../context/authProvider";

const Filter = ({
  cart,
  wish,
  onKeywordSearch,
  onCategorySearch,
  scrollToTop,
}: FilterProps) => {
  const { username } = useAuth();
  const [active, setActive] = useState(false);
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();
  const keywordRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleOnKeywordSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keywordRef.current) {
      const keyword = keywordRef.current.value;
      onKeywordSearch(keyword);
    }
    formRef.current && formRef.current.reset();
    setActive(false);
  };

  const toggleExpand = () => {
    expand ? setExpand(false) : setExpand(true);
  };

  const handleOnCategorySearch = (category: CategoryT) => {
    onCategorySearch(category);
    setExpand(false);
  };

  const goToCart = () => {
    navigate(`/cart/${username}`);
  };
  const goToWish = () => {
    navigate(`/wish/${username}`);
  };
  return (
    <section className={styles.filter}>
      <form
        ref={formRef}
        className={`${styles.search} ${active && styles.active}`}
        onSubmit={handleOnKeywordSearch}
      >
        <SearchIcon />
        <input
          ref={keywordRef}
          className={styles.searchInput}
          type="text"
          placeholder="SEARCH"
          autoComplete="off"
          onKeyPress={() => {
            setActive(true);
          }}
          required
        />
      </form>
      <ul className={styles.list}>
        <li className={styles.categoryItem}>
          <button className={styles.filterBtn} onClick={toggleExpand}>
            CATEGORY
            <CategoryIcon />
          </button>
          {expand && (
            <FilterExpand
              onClose={toggleExpand}
              onCategorySearch={handleOnCategorySearch}
            />
          )}
        </li>
        <li className={styles.item}>
          <button className={styles.filterBtn} onClick={goToWish}>
            WISHILIST [{wish}]
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.filterBtn} onClick={goToCart}>
            CART [{cart}]
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.scrollBtn} onClick={scrollToTop}>
            <ArrowUpIcon />
            TOP
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Filter;
