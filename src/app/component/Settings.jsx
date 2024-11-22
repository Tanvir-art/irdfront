import language from "../../assets/d.png";
import general from "../../assets/c.png";
import font from "../../assets/b.png";
import apperance from "../../assets/a.png";
import Image from "next/image";
import { useState } from "react";

const Settings = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggle = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <div className="bg-white w-full lg:w-[500px] h-screen flex flex-col gap-6 p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl text-[#393939] font-bold border-b pb-2 text-center">
        Settings
      </h2>

      <div className="flex items-center space-x-4 h-16 bg-[#f5f5f5] p-4 rounded-md  transition-all group border-l-[5px] border-transparent hover:border-l-[#34d399]">
        <Image
          src={language}
          alt="language"
          width={28}
          height={28}
          className="group-hover:brightness-110"
        />
        <h2 className="text-base text-[#6b7280] group-hover:text-[#34d399]">
          Language Settings
        </h2>
      </div>

      <div className="flex items-center space-x-4 h-16 bg-[#f5f5f5] p-4 rounded-md  transition-all group border-l-[5px] border-transparent hover:border-l-[#34d399]">
        <Image
          src={general}
          alt="general"
          width={28}
          height={28}
          className="group-hover:brightness-110"
        />
        <h2 className="text-base text-[#6b7280] group-hover:text-[#34d399]">
          General Settings
        </h2>
      </div>

      <div className="flex items-center space-x-4 h-16 bg-[#f5f5f5] p-4 rounded-md  transition-all group border-l-[5px] border-transparent hover:border-l-[#34d399]">
        <Image
          src={font}
          alt="font"
          width={28}
          height={28}
          className="group-hover:brightness-110"
        />
        <h2 className="text-base text-[#6b7280] group-hover:text-[#34d399]">
          Font Settings
        </h2>
      </div>

      <div className="flex items-center space-x-4 h-16 bg-[#f5f5f5] p-4 rounded-md  transition-all group border-l-[5px] border-transparent hover:border-l-[#34d399]">
        <Image
          src={apperance}
          alt="appearance"
          width={28}
          height={28}
          className="group-hover:brightness-110"
        />
        <h2 className="text-base text-[#6b7280] group-hover:text-[#34d399]">
          Appearance Settings
        </h2>
      </div>

      <div className="flex justify-between items-center h-16 bg-[#f5f5f5] p-4 rounded-md  transition-all border-l-[5px] border-transparent hover:border-l-[#34d399]">
        <h2 className="text-base text-[#6b7280]">Night Mode</h2>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isNightMode}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#34d399] rounded-full peer dark:bg-gray-700 peer-checked:bg-[#34d399] transition-colors"></div>
          <span className="absolute inset-y-0 left-0 w-5 h-5 m-0.5 bg-white border rounded-full transform peer-checked:translate-x-5 transition-transform"></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
