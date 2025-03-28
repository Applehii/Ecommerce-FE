import HeroSection from "@/components/HeroSection/HeroSection";
import styles from './page.module.css'
import Header from "@/components/Header/Header";
import General from "@/components/General/General";
import NewArrival from "@/components/NewArrival/NewArrival";
import Hightlight from "@/components/Hightlight/Hightlight";

export default function Home() {
  return (
    <>
    <div className={styles.yellowBackground}>
      <div className="container">
      <Header/>
      <HeroSection/>
      </div>
    </div>
    <General />
    <NewArrival />
    <Hightlight />
    </>
  );
}
