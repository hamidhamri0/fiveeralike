import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Categories from "./Categories";

const MainHeader: React.FC = () => {
  return (
    <div className="mb-12 h-[130px]">
      <div className="fixed left-0 top-0 z-50 w-full">
        <Header />
        <Categories />
      </div>
    </div>
  );
};

export default MainHeader;
