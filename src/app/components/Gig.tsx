import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdVerified } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type GigParam = {
  profileImage: string;
  gigImages: string[];
  username: string;
  description: string;
  hasVideo: boolean;
  startingPrice: number;
  rating: number;
  pro: boolean;
  classNameForImage?: string;
};

export function BoxLevelRating({ pro }: { pro?: boolean }) {
  const MAX_RATING = 3;
  const [rating, setRating] = useState(2);
  return (
    <div
      className={`ml-auto flex items-center justify-center gap-1 rounded-lg ${rating == 3 ? "bg-[#FFE0B3]" : "bg-transparent"} px-2`}
    >
      {!pro && (
        <span
          className={`text-sm font-bold ${rating == 3 ? "text-[#804317]" : "text-black"}`}
        >
          {rating == 3 ? "Top Rated" : "Level " + rating}
        </span>
      )}
      {!pro &&
        Array.from({ length: rating }, (_, index) => {
          return (
            <span
              key={index}
              className={`${rating == 3 ? "text-[#804317]" : "text-black"} `}
            >
              &#9830;
            </span>
          );
        })}
      {!pro &&
        MAX_RATING - rating > 0 &&
        Array.from({ length: MAX_RATING - rating }, (_, index) => {
          return (
            <span key={index} className="text-[#000000] opacity-40">
              &#9830;
            </span>
          );
        })}
      {pro && <ProBox />}
    </div>
  );
}

function ProBox() {
  return (
    <div className="ml-auto flex items-center justify-center gap-1 rounded-lg bg-[#2E25AD] px-2">
      <MdVerified fill="white" size={15} />
      <span className="text-sm font-semibold text-gray-200">Pro</span>
    </div>
  );
}

const ImageSlider = ({
  gigImages,
  classNameForImage,
}: {
  gigImages: string[];
  classNameForImage?: string;
}) => {
  const images = ["/images/paywatch.webp", "/images/paywatch.webp"];

  const [addedToList, setAddedToList] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  classNameForImage = twMerge(
    "group relative mb-4 h-36 w-full cursor-pointer overflow-hidden rounded-md border border-gray-200 shadow-md xs:h-40",
    classNameForImage,
  );

  return (
    <div className={classNameForImage}>
      <div
        className="flex h-full w-full transform transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {gigImages.map((image: string, index: number) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>
      <span
        onClick={() => setAddedToList((p) => !p)}
        className="absolute right-4 top-4 cursor-pointer"
      >
        {addedToList ? (
          <FaHeart className="opacity-20" size={25} color="black" fill="red" />
        ) : (
          <FaHeart size={25} color="black" fill="#ec3131" />
        )}
      </span>
      {currentIndex > 0 && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handlePrev}
        >
          <FaChevronLeft className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
      )}
      {currentIndex + 1 < images.length && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-gray-800 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100"
          onClick={handleNext}
        >
          <FaChevronRight className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </button>
      )}
    </div>
  );
};

export default function Gig({
  profileImage,
  gigImages,
  username,
  description,
  hasVideo,
  startingPrice,
  rating,
  pro,
  classNameForImage = "",
}: GigParam) {
  return (
    <div className="group min-w-64 xs:min-w-72">
      <ImageSlider
        classNameForImage={classNameForImage}
        gigImages={gigImages}
      />
      <div className="flex gap-2">
        <div className="h-6 w-6 rounded-full">
          <img
            className="h-full w-full rounded-full"
            alt="yacine"
            src={profileImage}
          />
        </div>
        <h3 className="line-clamp-2 cursor-pointer font-semibold hover:underline">
          {username}
        </h3>

        <BoxLevelRating pro={pro} />
      </div>
      <p className="mb-4 line-clamp-2 cursor-pointer overflow-hidden font-medium transition-all hover:underline">
        {description}
      </p>
      <div className="mb-3 flex items-center gap-1">
        <span>
          <FaStar fill="black" />
        </span>
        <span className="font-bold">{rating}</span>
        <span>(1k+)</span>
      </div>
      <p className="mb-2 font-bold text-gray-900">From {startingPrice}$ </p>
      <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
        <HiOutlineVideoCamera size={18} />
        {hasVideo && <span>Offers video consultations</span>}
      </div>
    </div>
  );
}
