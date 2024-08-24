import React from "react";
import ProCard from "./smallComponents/ProCard";
import RatingCard from "./smallComponents/RatingCard";
import LevelRatingCard from "./smallComponents/LevelRatingCard";
import { MdVerified } from "react-icons/md";
import Button from "./smallComponents/Button";
import { CgCamera } from "react-icons/cg";

type UserCardProps = {
  username: string;
  image: string;
  bio: string;
  isOnline: boolean;
  rating: number;
  count: number;
  level: number;
  pro: boolean;
};

function OnlineStatus({ isOnline }: { isOnline: boolean }) {
  return (
    <>
      {isOnline && (
        <div className="rounded-full border border-green-400 px-2 text-sm text-green-400">
          Online
        </div>
      )}
    </>
  );
}

function UserCard({
  username,
  image,
  isOnline,
  rating,
  level,
  bio,
  count,
  pro,
}: UserCardProps) {
  return (
    <div className="mb-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-24 w-24 rounded-full">
          <img
            className="h-full w-full rounded-full"
            src={image}
            alt={username}
          />
          {pro && (
            <span className="absolute bottom-0 right-0 z-10 rounded-full bg-white">
              <MdVerified size={30} className="text-blue-800" />
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="font-bold text-gray-900">{username}</div>
            <ProCard pro={true} />
            {isOnline && <OnlineStatus isOnline={isOnline} />}
          </div>
          <p>{bio} </p>
          <div className="flex gap-4">
            <RatingCard count={count} rating={rating} />
            <span className="w-[0.5px] bg-gray-300"></span>
            <LevelRatingCard rating={level} />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button color="white">Contact me</Button>
      </div>
    </div>
  );
}

type UserStatsProps = {
  From: string;
  MemberSince: string;
  Languages: string[];
  description: string;
};

function UserStats({
  From,
  MemberSince,
  Languages,
  description,
}: UserStatsProps) {
  return (
    <div className="maw-w-[700px] mx-auto rounded-md border border-gray-300 p-4">
      <div className="mb-4 grid grid-cols-2 gap-4 border-b border-gray-400 pb-4 xs:grid-cols-1">
        <div className="flex flex-col gap-1">
          <div>From</div>
          <div className="font-bold">{From}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Member Since</div>
          <div className="font-bold">{MemberSince}</div>
        </div>
        <div className="flex flex-col gap-1">
          <div>Languages</div>
          <div className="flex gap-2">
            {Languages.map((lang, i) => (
              <div key={lang} className="font-bold">
                {lang}
                {i !== Languages.length - 1 && ","}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function UserProfileCard() {
  return (
    <div className="mx-auto max-w-[700px] p-2">
      <UserCard
        username="Kimberly R"
        image="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/507347b5968f7e1bc3ea45cae4d53673-1714236122926/bae44460-0987-44b8-8b8a-2b924a71fa42.jpg"
        isOnline={true}
        rating={4.5}
        level={3}
        bio="I am a professional graphic designer"
        count={100}
        pro={true}
      />
      <UserStats
        From="United States"
        MemberSince="2020"
        Languages={["English", "Arabic"]}
        description="I am a professional graphic designer with 5 years of experience. I have worked with many clients and have a good rating."
      />
    </div>
  );
}
