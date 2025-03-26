'use client'
import HeroSection from "@/components/HeroSection/HeroSection";
import Menu from "@/components/Nav";
import styles from './page.module.css'


export default function Home() {
  return (
      <div className={styles.headerTop}>
        <Menu />
        <HeroSection/>
      </div>

  );
}
