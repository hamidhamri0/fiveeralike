"use client";

import WelcomeContent from "./components/WelcomeContent";
import GigSlides from "./components/GigSlides";
import SavedGigsForYou from "./components/SavedGigsForYou";
import VerifiedProServices from "./components/VerifiedProServices";
import GalleryLayout from "./components/GalleryLayout";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MainHeader from "./components/MainHeader";
import HeroBanner from "./components/HeroBanner";
import CategoriesContainer from "./components/CategoriesContainer";
import Services from "./components/Services";
import ServicesOverview from "./components/ServicesOverview";
import CategoryBanner, {
  CategoryBannerContent,
} from "./components/CategoryBanner";
import CategoryCarouselCard from "./components/CategoryCarousel";
import CategoryGrid from "./components/CategoryGrid";
import DrowDownFAQ from "./components/DrowDownFAQ";
import { FaSearch } from "react-icons/fa";
import Meta from "./components/smallComponents/Icons/Meta";
import Google from "./components/smallComponents/Icons/Google";
import Netflix from "./components/smallComponents/Icons/Netflix";
import Pg from "./components/smallComponents/Icons/Pg";
import Payoneer from "./components/smallComponents/Icons/Payoneer";
import RoundedCategoryCarousel from "./components/RoundedCategoryCarousel";
import FiltersComponent from "./components/FiltersComponent";
import SelectedFilters from "./components/SelectedFilters";
import SearchResults from "./components/SearchResults";
import GigOverview from "./components/GigOverview";
import SlideShow from "./components/SlideShow";
import ReviewsCarousel from "./components/ReviewsCarousel";

//bg-[url('/bigImages/ProgrammingBanner.webp')

let s = "/bigImages/ProgrammingBanner.webp";
export default function Home() {
  return (
    <div className="h-full w-full text-[#74767e] dark:bg-gray-800 dark:text-gray-200">
      <MainHeader />
      {/* <GigOverview /> */}
      {/* <SlideShow
        images={[
          "/images/KITCHEN VIEW 02 copy 2.webp",
          "/images/KITCHEN VIEW 02 copy 3.webp",
          "/images/D1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
          "/images/E1.webp",
        ]}
      /> */}
      <ReviewsCarousel />
      {/* <RoundedCategoryCarousel /> */}
      {/* <FiltersComponent /> */}
      {/* <SelectedFilters /> */}
      {/* <SearchResults /> */}
      {/* <CategoryBanner
        // className="min-h-[500px] from-green-700 to-green-900 bg-cover bg-no-repeat xl:h-[400px] lg:bg-gradient-to-tl"
        // bgImage="bg-[url('/bigImages/hero.webp')]"
        bgImage="bg-[url('/bigImages/ProgrammingBanner.webp')]"
        mobileBgImage="sm:bg-[url('/bigImages/ProgrammingBannerSmall.webp')]"
      >
        <CategoryBannerContent
          category="Programming & Tech"
          description="You think it. A programmer develops it."
        /> */}
      {/* <HeroBanner /> */}
      {/* </CategoryBanner> */}
      {/* <CategoryGrid /> */}
      {/* <DrowDownFAQ /> */}
      {/* <CategoryCarouselCard /> */}
      {/* <CategoriesContainer /> */}
      {/* <Services /> */}
      {/* <ServicesOverview /> */}
      {/* <WelcomeContent /> */}
      {/* <GigSlides /> */}
      {/* <SavedGigsForYou /> */}
      {/* <VerifiedProServices /> */}
      {/* <GalleryLayout /> */}
      {/* <Footer /> */}
    </div>
  );
}
