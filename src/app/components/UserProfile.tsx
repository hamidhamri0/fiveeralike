import React from "react";
import { FaRegClock } from "react-icons/fa";
import {
  IoLanguageSharp,
  IoLocationOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { MdAssuredWorkload, MdWork } from "react-icons/md";

export default function UserProfile() {
  return (
    <div className="mx-auto max-w-[500px] rounded-xl border border-gray-200 p-4 text-gray-800 shadow-sm">
      <div className="flex h-52 flex-col items-center justify-center border-b border-gray-300 object-cover pb-6">
        <div className="text-center">
          <div className="mb-2 h-32 w-32 rounded-full">
            <img
              src="/smallImages/data-science.webp"
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-gray-900">Kazi</h3>
          <span className="font-semibold">@hamidhamri</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b border-gray-300 px-2 py-3">
        <div className="flex items-center gap-2">
          <span>
            <IoLocationOutline />
          </span>
          <span>Located in Algeria</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <IoPersonOutline />
          </span>
          <span>Joined in May 2020</span>
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-gray-300 px-2 py-3">
        <span>
          <MdAssuredWorkload />
        </span>
        <span>Working in: Software Development</span>
      </div>
      <div className="flex items-center gap-2 border-b border-gray-300 px-2 py-3">
        <span>
          <IoLanguageSharp />
        </span>
        <span>English (Basic)</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-3">
        <span>
          <FaRegClock />
        </span>
        <span>Preferred hours: Mon-Fri, 9:00 AM-5:00 PM</span>
      </div>
    </div>
  );
}
