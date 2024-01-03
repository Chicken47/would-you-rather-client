import React from "react";

const Header = ({ type, setType }) => {
  const unselected = "px-4 py-1 cursor-pointer";
  const selected = "px-4 py-1 cursor-pointer underline font-bold";
  return (
    <div className="flex w-10/12 py-4 px-7 border rounded-full items-center justify-between bg-[#6e6e6e50] shadow-lg">
      <div className="font-extrabold">Would You Rather</div>
      <img src="/images/genzstar.png" className="object-contain" />
      <div className="flex items-center space-x-3">
        <span
          onClick={() => setType("new")}
          className={type === "new" ? selected : unselected}
        >
          New
        </span>
        <span
          onClick={() => setType("top")}
          className={type === "top" ? selected : unselected}
        >
          Favourites
        </span>
        <span
          onClick={() => setType("controversial")}
          className={type === "controversial" ? selected : unselected}
        >
          Controversial
        </span>
      </div>
      <img src="/images/genzstar.png" className="object-contain" />
      <div className="flex items-center space-x-3">
        <span>Saved</span>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Header;
