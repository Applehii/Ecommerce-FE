import HeroSection from "@/components/HeroSection/HeroSection";
import styles from './page.module.css'
import Header from "@/components/Header/Header";
import General from "@/components/General/General";
import NewArrival from "@/components/NewArrival/NewArrival";
import Spotlight from "@/components/Spotlight/Spotlight";
import Deal from "@/components/Deal/Deal";

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
    <Spotlight />
    <Deal />
    </>
  );
}
