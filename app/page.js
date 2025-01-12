import AddressBar from "./_Components/AddressBar";
import BannersSection from "./_Components/BannersSection";
import FeaturedSection from "./_Components/FeaturedSection";
import Header from "./_Components/Header";
import IconsSection from "./_Components/IconsSection";
import SearchBar from "./_Components/SearchBar";
import HealthCheckSection from "./_Components/HealthCheckSection";
import HealthCheckBengaluruSection from "./_Components/HealthCheckBengaluruSection";
import UserReviewSection from "./_Components/UserReviewSection";
import QuestionsSection from "./_Components/QuestionsSection";
import HowItWorksSection from "./_Components/HowItWorksSection";
import OurFeaturesSectiom from "./_Components/OurFeaturesSectiom";
import TrustedSection from "./_Components/TrustedSection";
import Footer from "./_Components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AddressBar />
      <SearchBar />
      <IconsSection />
      <BannersSection />
      <FeaturedSection />
      <HealthCheckSection />
      <HealthCheckBengaluruSection />
      <UserReviewSection />
      <OurFeaturesSectiom />
      <TrustedSection/>
      <QuestionsSection />
      <HowItWorksSection />
      <div className="mx-5 md:mx-40 relative my-6">
        <img src="./app_banner.webp" alt="app banner"/>
        <div className="flex gap-2 absolute bottom-7 left-7 md:left-20 md:bottom-16">
          <button><img src="https://www.medibuddy.in/assets/images/android.png" alt="google download" className="h-4 md:h-14"/></button>
          <button><img src="https://www.medibuddy.in/assets/images/ios.png" alt="google download" className="h-4 md:h-14"/></button>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
