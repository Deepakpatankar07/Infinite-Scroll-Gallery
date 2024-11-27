"use client";

import { BiHeart,BiSolidHeart } from "react-icons/bi";
import styles from "./page.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetImages } from "@/store/actions/unsplashAction";

export default function Home() {
  const dispatch = useDispatch();
  const { images, hasMore } = useSelector((state) => state.unsplashReducer);

  const [dets, setDets] = useState(-1);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Track the expanded item index

  const GetDetails = (index) => {
    dets === index ? setDets(-1) : setDets(index);
  };

  const handleExpansion = (index) => {
    expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
  };

  const GetImages = () => dispatch(asyncSetImages());
  useEffect(() => {
    GetImages();
  }, []);
  return (
    <main className={`${styles.main}`}>
      <InfiniteScroll
        dataLength={images.length}
        next={GetImages}
        hasMore={hasMore}
        loader={<h4 className={styles.InfiniteScroll}>Loading...</h4>}
        endMessage={
          <p className={styles.InfiniteScroll}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className={`${styles.ul}`}>
          {images.map((image, i) => (
            <li
              className={`${styles.li} ${
                expandedIndex === i ? styles.full : ""
              }`}
              key={i}
            >
              <button onMouseEnter={() => GetDetails(i)}
              onMouseLeave={() => GetDetails(i)}>
                {/* {dets === i && (
                  <div className={styles.MoreDetails}>
                    <div className={styles.detailsBtn}>
                      <BiHeart/>
                    </div>
                  </div>
                )} */}
                <img
                  src={image.urls.regular}
                  alt=""
                  onClick={() => handleExpansion(i)}
                />
              </button>
            </li>
          ))}
        </div>
      </InfiniteScroll>
    </main>
  );
}
