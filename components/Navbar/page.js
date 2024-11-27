"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPage } from "@/store/reducers/searchReducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [slug, setSlug] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/${slug}`);
    dispatch(setPage(1));
    setSlug("");
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.navLogo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeby}>Code By</p>
          <p className={styles.deepak}>Deepak</p>
          <p className={styles.patankar}>Patankar</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSlug(e.target.value)}
            value={slug}
          />
          <button><BiSearch/></button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
