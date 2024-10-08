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
import UserProfileCard from "./components/UserProfileCard";
import Reviews from "./components/Reviews";
import RelatedTags from "./components/smallComponents/RelatedTags";
import ActionToolbar from "./components/ActionToolbar";
import PricingPackageCard from "./components/PricingPackageCard";
import PackagesTable from "./components/PackagesTable";
import UserProfile from "./components/UserProfile";

//bg-[url('/bigImages/ProgrammingBanner.webp')

const reviews = [
  {
    reviewer: {
      username: "john_doe",
      image: "/smallImages/data-science.webp",
      country: "USA",
    },
    rating: {
      "1": 0,
      "2": 0,
      "3": 1,
      "4": 2,
      "5": 3,
    },
    review: "Great product, highly recommend!",
    duration: "2 weeks",
    price: 49.99,
    date: "2021-09-01",
  },
  {
    reviewer: {
      username: "jane_smith",
      image: "/smallImages/data-science.webp",
      country: "Canada",
    },
    rating: {
      "1": 0,
      "2": 1,
      "3": 0,
      "4": 3,
      "5": 1,
    },
    review: "Good value for the price.",
    duration: "1 month",
    price: 39.99,
    date: "2021-09-01",
  },
  {
    reviewer: {
      username: "alice_jones",
      image: "/smallImages/data-science.webp",
      country: "UK",
    },
    rating: {
      "1": 0,
      "2": 0,
      "3": 2,
      "4": 1,
      "5": 2,
    },
    review: "Satisfied with the purchase.",
    duration: "3 weeks",
    price: 59.99,
    date: "2021-02-05",
  },
  {
    reviewer: {
      username: "bob_brown",
      image: "/smallImages/data-science.webp",
      country: "Australia",
    },
    rating: {
      "1": 1,
      "2": 0,
      "3": 1,
      "4": 2,
      "5": 1,
    },
    review: "Average quality, could be better.",
    duration: "2 months",
    price: 29.99,
    date: "2021-07-04",
  },
  {
    reviewer: {
      username: "charlie_davis",
      image: "/smallImages/data-science.webp",
      country: "Germany",
    },
    rating: {
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 4,
      "5": 1,
    },
    review: "Exceeded my expectations!",
    duration: "1 week",
    price: 69.99,
    date: "2021-08-01",
  },
];

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
      {/* <ReviewsCarousel /> */}
      <UserProfileCard />
      <Reviews
        allRatings={600}
        eachRating={{
          "1": 150,
          "2": 20,
          "3": 80,
          "4": 50,
          "5": 300,
        }}
        reviews={reviews}
      />
      {/* <RelatedTags /> */}
      {/* <ActionToolbar /> */}
      {/* <PricingPackageCard /> */}
      {/* <PackagesTable /> */}
      <UserProfile />
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
