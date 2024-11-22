import React from "react";
import polygon from "../../assets/polygon.png";
import profile from "../../assets/profile.png";
import frame from "../../assets/frame.png";
import setting from "../../assets/settings.svg";
import Image from "next/image";

const TopMenu = ({ setSettingsUI }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 rounded-lg w-full h-[80px]">
      <div className="">
        <h2 className="text-xl font-bold text-gray-800 truncate">Duas Page</h2>
      </div>

      <div className="flex justify-between items-center gap-6 ">
        {/* Search Box */}
        <div className="relative w-[200px] md:[250px] lg:w-[300px]">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="pl-10 pr-4 py-2 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1fa45b] w-full"
          />
          <div
            className="absolute top-1/2 right-1 -translate-y-1/2 bg-[#f3f4f6] flex items-center justify-center rounded-sm cursor-pointer"
            style={{
              height: "calc(100% - 4px)",
              width: "44px",
            }}
          >
            <Image src={frame} alt="search" width={20} height={20} />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={profile}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full shadow-md"
          />
          <Image src={polygon} alt="polygon" width={10} height={10} />

          <div className="pl-6" onClick={() => setSettingsUI(true)}>
            <Image src={setting} alt="setting" width={25} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
