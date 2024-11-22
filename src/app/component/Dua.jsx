"use client";
import allah from "../../assets/allah.png";
import play from "../../assets/Group 120.png";
import copy from "../../assets/copy.png";
import bookmark from "../../assets/bookmark 1.png";
import share from "../../assets/share 1.png";
import light from "../../assets/report 1.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import HamburgerWithText from "./HamburgerWithText";

const Dua = ({ selectedCatId, isMobileView, setTimelinePopup }) => {
  const [duas, setDuas] = useState([]);
  const [subCategories, setSubcategories] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [audioSrc, setAudioSrc] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(" https://irdback.vercel.app/duas", {
          cache: "force-cache",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch duas");
        }
        const duasData = await response.json();
        const filteredDuas = duasData.filter(
          (dua) => dua.cat_id === selectedCatId
        );
        setDuas(filteredDuas);

        const subcategoriesResponse = await fetch(
          " https://irdback.vercel.app/subcategories",
          { cache: "force-cache" }
        );
        if (!subcategoriesResponse.ok) {
          throw new Error("Failed to fetch subcategories");
        }
        const subcategoriesData = await subcategoriesResponse.json();
        const filteredSubcategories = subcategoriesData.filter(
          (subcat) => subcat.cat_id === selectedCatId
        );
        setSubcategories(filteredSubcategories);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [selectedCatId]);

  const groupedDuas = subCategories.map((subCategory) => ({
    ...subCategory,
    duas: duas.filter((dua) => dua.subcat_id === subCategory.id),
  }));

  const toggleAudio = (audioUrl) => {
    if (currentAudio && audioSrc === audioUrl) {
      // Stop and hide if clicked on the same audio
      currentAudio.pause();
      setCurrentAudio(null);
      setAudioSrc("");
    } else {
      // Play a new audio
      if (currentAudio) {
        currentAudio.pause();
      }
      const newAudio = new Audio(audioUrl);
      newAudio.play();
      setCurrentAudio(newAudio);
      setAudioSrc(audioUrl);
    }
  };

  return (
    <div className="flex flex-col ml-4 h-[600px] overflow-x-auto">
      {isMobileView && (
        <div className="py-3" onClick={() => setTimelinePopup(true)}>
          <HamburgerWithText />
        </div>
      )}
      {groupedDuas.map((group) => (
        <div key={group.id} className="mb-6">
          {/* Subcategory Name */}
          <div className="bg-white h-[50px] mb-4 rounded-md flex items-center pl-6">
            <p className="text-base">
              <span className="text-[#1FA45B] font-semibold text-base">
                Section:
              </span>
              <span className="pl-3 ">{group.subcat_name_en}</span>
            </p>
          </div>

          {/* Duas for this Subcategory */}
          {group.duas.map((dua) => (
            <div
              key={dua.id}
              className="bg-white pl-7 pr-8 rounded-md pt-4 mb-6"
            >
              <div className="flex gap-3 items-center">
                <Image src={allah} alt="allah" width={35} height={35} />
                <h2 className="text-base text-[#1FA45B] ">{`${dua.id}. ${dua.dua_name_en}`}</h2>
              </div>

              <p className="py-5">{dua.top_en}</p>

              {dua.dua_arabic && (
                <p className="text-[24px] font-[400] py-6" dir="rtl">
                  {dua.dua_arabic}
                </p>
              )}

              {dua.transliteration_en && (
                <p className="py-3">
                  <span className="text-[#393939] font-semibold text-base">
                    Transliteration:
                  </span>
                  <span className="italic text-base">
                    {dua.transliteration_en}
                  </span>
                </p>
              )}

              {dua.translation_en && (
                <p className="text-[#393939] pt-2 pb-6">
                  <span className="font-semibold text-base">Translation:</span>
                  <span className="text-base">{dua.translation_en}</span>
                </p>
              )}

              <p className="text-base font-semibold text-[#1FA45B]">
                Reference:
              </p>
              <p className="text-base text-[#393939]">{dua.refference_en}</p>

              {/* Action Icons */}
              <div className="flex items-center justify-between">
                {dua.audio && (
                  <div className="relative">
                    <Image
                      src={play}
                      alt="play"
                      width={50}
                      height={50}
                      className="mt-16 pb-6 cursor-pointer"
                      onClick={() => toggleAudio(dua.audio)}
                    />
                    {audioSrc === dua.audio && (
                      <audio
                        className="absolute left-24 top-16"
                        src={dua.audio}
                        controls
                        autoPlay
                      />
                    )}
                  </div>
                )}
                <div>
                  <div className="flex gap-3 mt-16 pb-4">
                    <Image src={copy} alt="copy" width={20} height={20} />
                    <Image
                      src={bookmark}
                      alt="bookmark"
                      width={20}
                      height={20}
                    />
                    <Image src={share} alt="share" width={20} height={20} />
                    <Image src={light} alt="light" width={20} height={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dua;
