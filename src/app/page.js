"use client";
import React, { useState, useEffect } from "react";
import TimelineTab from "./component/Category";
import Dua from "./component/Dua";
import LeftMenu from "./component/LeftMenu";
import TopMenu from "./component/TopMenu";
import Settings from "./component/Settings";
import BottomMenu from "./component/BottomMenu";
import PopUpTimeLine from "./component/PopUpTimeLine";

export default function Home() {
  const [selectedCatId, setSelectedCatId] = useState(1);
  const [selectedSubCatId, setSelectedSubCatId] = useState(1);
  const [settingsUI, setSettingsUI] = useState(false);
  const [timelinePopup, setTimelinePopup] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex relative">
      {!isMobileView && <LeftMenu />}
      <div className="w-full">
        <TopMenu setSettingsUI={setSettingsUI} />
        <div className=" flex gap-2 px-4 overflow-hidden">
          {!isMobileView && (
            <div className="w-[400px]">
              {" "}
              {/* Fixed width for TimelineTab */}
              <TimelineTab
                onCategorySelect={setSelectedCatId}
                setSelectedSubCatId={setSelectedSubCatId}
              />
            </div>
          )}
          <div
            className={`{!isMobileView ? "w-[calc(100%-400px)]" : "w-full"} `}
          >
            {/* Fixed width for Dua on larger screens, full width on smaller screens */}
            <Dua
              selectedCatId={selectedCatId}
              selectedSubCatId={selectedSubCatId}
              isMobileView={isMobileView}
              setTimelinePopup={setTimelinePopup}
            />
          </div>
        </div>
      </div>

      {isMobileView && <BottomMenu />}

      {settingsUI && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setSettingsUI(false)}
          ></div>

          {/* Settings Popup */}
          <div className="fixed top-0 right-0 w-full lg:w-[500px] h-full bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out">
            <Settings />
            <button
              onClick={() => setSettingsUI(false)}
              className="absolute top-4 right-4 text-2xl text-red-500"
            >
              &times; {/* Close Button */}
            </button>
          </div>
        </>
      )}

      {timelinePopup && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setTimelinePopup(false)}
          ></div>

          <div className="fixed top-0 left-0 w-full lg:w-[500px] h-full bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out pt-5">
            <PopUpTimeLine
              onCategorySelect={setSelectedCatId}
              setSelectedSubCatId={setSelectedSubCatId}
            />
            <button
              onClick={() => setTimelinePopup(false)}
              className="absolute top-4 right-5 text-2xl text-red-500"
            >
              &times; {/* Close Button */}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
