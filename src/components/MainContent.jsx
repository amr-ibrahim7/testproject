import AboutComponent from "./AboutComponent";
import CatalogSwiperSection from "./CatalogSwiper";
import CatalogueSection from "./CatalogueSection";
import HeroSection from "./HeroSection";
import MarqueeSwiper from "./MarqueeSwiper";

const MainContent = () => (
  <>
    <HeroSection />
    <MarqueeSwiper />
    <AboutComponent />
    <CatalogueSection />
    {/* <LocationSection /> */}
    <CatalogSwiperSection />
  </>
);

export default MainContent;
