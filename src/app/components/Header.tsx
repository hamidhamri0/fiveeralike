import { IoIosSearch } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { MdLanguage, MdOutlineNotifications } from "react-icons/md";
import React, { ReactNode, useContext, useRef, useState } from "react";
import IconButton from "./smallComponents/IconButton";
import { OpenArrow } from "./Footer";
import Menus, { MenusContext } from "./Menu";
import HireIcon from "./Icons/HireIcon";

type FiverrProCardType = {
  icon: ReactNode;
  title: string;
  description: string;
};

function NavLink({
  label,
  icon,
  className = "",
}: {
  label: string;
  icon?: ReactNode;
  className?: string;
}) {
  className =
    "flex cursor-pointer items-center gap-2 font-semibold hover:text-green-500 " +
    className;
  return (
    <a className={className}>
      {icon && <span>{icon} </span>}
      {label}
    </a>
  );
}

function FiverrProCard({ icon, title, description }: FiverrProCardType) {
  return (
    <div className="flex cursor-pointer items-center gap-4 rounded-md border border-gray-300 p-2 hover:bg-slate-100 hover:bg-opacity-70">
      {icon}
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold"> {title} </h2>
        <p className="text-sm text-gray-500"> {description} </p>
      </div>
    </div>
  );
}

type ExploreOptionType = {
  title: string;
  description: string;
};

function ExploreOption({ title, description }: ExploreOptionType) {
  return (
    <div className="300 flex cursor-pointer flex-col items-start rounded-md p-2 hover:bg-slate-100 hover:bg-opacity-70">
      <h2 className="font-semibold"> {title} </h2>
      <p className="text-sm text-gray-500">{description} </p>
    </div>
  );
}
const exploreOptions = [
  { title: "Discover", description: "Inspiring projects made on Fiverr" },
  {
    title: "Community",
    description: "Connect with Fiverr’s team and community",
  },
  {
    title: "Guides",
    description: "In-depth guides covering business topics",
  },
  { title: "Podcast", description: "Inside tips from top business minds" },
  {
    title: "Learn",
    description: "Professional online courses, led by experts",
  },
  { title: "Logo Maker", description: "Create your logo instantly" },
];

export default function Header() {
  const [profile, setProfile] = useState(null);

  return (
    <header className="border-b-0 bg-white px-4 py-5">
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-center gap-8 ${profile ? "sm:flex-col" : ""} sm:items-stretch sm:gap-4`}
      >
        <div
          className={`w-20 cursor-pointer sm:flex ${profile ? "sm:`w`-full" : ""} sm:justify-center`}
        >
          <svg
            width="89"
            height="27"
            viewBox="0 0 89 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#404145">
              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#1dbf73">
              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
            </g>
          </svg>
        </div>
        {profile && (
          <form className="flex flex-auto">
            <input
              className="w-full rounded-md rounded-r-none border border-gray-300 p-2 px-4 text-[#404145] outline-none"
              placeholder="What service are you looking for today?"
            />
            <a className="flex w-14 flex-grow cursor-pointer items-center justify-center rounded-r-md bg-gray-800 dark:bg-gray-400">
              <IoIosSearch className="h-6 w-full text-white" />
            </a>
          </form>
        )}
        {profile ? (
          <ul className="flex items-center justify-around gap-4">
            <IconButton className="p-5">
              <MdOutlineNotifications size={20} />
            </IconButton>

            <IconButton className="p-5">
              <FaRegEnvelope size={20} />
            </IconButton>

            <IconButton className="p-5">
              <LuHeart size={20} />
            </IconButton>

            <li className="cursor-pointer p-2 font-semibold transition-all hover:text-green-500 lg:hidden">
              Orders
            </li>
            <li className="cursor-pointer whitespace-nowrap font-semibold text-green-500 md:hidden">
              Switch to Selling
            </li>
            <li className="relative h-8 w-8 cursor-pointer sm:hidden">
              <img
                className="h-full w-full rounded-full"
                src="/images/yacine.png"
              />
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full border border-white bg-green-500"></span>
            </li>
          </ul>
        ) : (
          <div className="ml-auto flex items-center gap-4">
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id="fiverrPro">
                  <Menus.DropDown
                    className="lg:hidden"
                    id="fiverrPro"
                    label="Fiverr Pro"
                  />
                </Menus.Toggle>
                <Menus.List id="fiverrPro">
                  <div className="flex w-[400px] flex-col gap-4 rounded-md bg-white p-6 shadow-md">
                    <FiverrProCard
                      title="I'm looking to hire"
                      description="My team needs vetted freelance talent and a premium business solution."
                      icon={<HireIcon />}
                    />
                    <FiverrProCard
                      title="I'm looking to hire"
                      description="My team needs vetted freelance talent and a premium business solution."
                      icon={<HireIcon />}
                    />
                  </div>
                </Menus.List>
              </Menus.Menu>

              <Menus.Menu>
                <Menus.Toggle id="explore">
                  <Menus.DropDown
                    className="lg:hidden"
                    id="explore"
                    label="Explore"
                  />
                </Menus.Toggle>
                <Menus.List id="explore">
                  <div className="flex w-[400px] flex-col gap-2 rounded-md border border-gray-200 bg-white p-4 shadow-lg">
                    {exploreOptions.map((option) => {
                      return (
                        <ExploreOption
                          key={option.title}
                          title={option.title}
                          description={option.description}
                        />
                      );
                    })}
                  </div>
                </Menus.List>
              </Menus.Menu>
              <NavLink
                className="xl:hidden"
                label="English"
                icon={<MdLanguage />}
              />
              <NavLink className="lg:hidden" label="Become a Seller" />
              <NavLink label="Sign In" />
              <NavLink
                className="rounded-md border border-green-500 px-4 py-2 text-sm text-green-400 transition-all hover:bg-green-700 hover:text-white"
                label="Join"
              />
            </Menus>
          </div>
        )}
      </nav>
    </header>
  );
}
