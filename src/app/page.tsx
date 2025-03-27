import HeroSection from "@/components/HeroSection/HeroSection";
import styles from './page.module.css'
import TopHeader from "@/components/TopHeader/TopHeader";

export default function Home() {
  return (
    <div className={styles.yellowBackground}>
      <div className="container">
        <TopHeader/>
        <HeroSection/>
      </div>
    </div>
  );
}
