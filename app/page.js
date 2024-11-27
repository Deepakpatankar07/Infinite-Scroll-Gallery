"use client";

import Gallery from "@/components/Gallery/page";
import { useEffect } from 'react';
import styles from './page.module.css'
const page = () => {
  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <main className={`${styles.mainContainer}`}>
      <Gallery />
    </main>
  );
};

export default page;
