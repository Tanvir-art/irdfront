"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frame from "../../assets/Frame.png";
import fever from "../../assets/fever.png";
import Image from "next/image";

const PopUpTimeLine = ({ onCategorySelect, setSelectedSubCatId }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [duas, setDuas] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // Default to first category
  const [expandedStep, setExpandedStep] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the first API
        const response1 = await fetch(
          " https://irdback.vercel.app/categories",
          { cache: "force-cache" }
        );
        if (!response1.ok) {
          throw new Error(
            `API 1 Error: ${response1.status} ${response1.statusText}`
          );
        }
        const categori = await response1.json();
        setCategories(categori);

        // Fetch the second API
        const response2 = await fetch(
          " https://irdback.vercel.app/subcategories",
          { cache: "force-cache" }
        );
        if (!response2.ok) {
          throw new Error(
            `API 2 Error: ${response2.status} ${response2.statusText}`
          );
        }
        const data2 = await response2.json();
        setSubcategories(data2);

        // Fetch the third API
        const response3 = await fetch(" https://irdback.vercel.app/duas", {
          cache: "force-cache",
        });
        if (!response3.ok) {
          throw new Error(
            `API 3 Error: ${response3.status} ${response3.statusText}`
          );
        }
        const data3 = await response3.json();
        setDuas(data3);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, []);

  const toggleCategory = (index, catId) => {
    setOpenIndex(openIndex === index ? null : index);
    setExpandedStep(null);
    onCategorySelect(catId);
  };

  const toggleStep = (index, subcatId) => {
    setExpandedStep(expandedStep === index ? null : index);
    setActiveIndex(index === activeIndex ? null : index);
    setSelectedSubCatId(subcatId);
  };

  // Filter subcategories and duas based on category
  const getSubcategoriesForCategory = (catId) =>
    subcategories.filter((subcat) => subcat.cat_id === catId);

  const getDuasForSubcategory = (subcatId) =>
    duas.filter((dua) => dua.subcat_id === subcatId);

  return (
    <div className="bg-white rounded-lg space-y-3 h-[600px] overflow-x-auto">
      {/* <div className="bg-[#1fa45b] text-white text-center py-4 text-[17px] font-semibold rounded-t-lg">
        <h2>Categories</h2>
      </div> */}
      <div className="px-2">
        {/* Search category */}
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="pl-10 pr-4 py-2 bg-[#f3f4f6] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1fa45b] w-full"
          />
          <div
            className="absolute top-1/2 left-1 -translate-y-1/2 flex items-center justify-center rounded-sm cursor-pointer"
            style={{ height: "calc(100% - 4px)", width: "44px" }}
          >
            <Image src={frame} alt="search" width={20} height={20} />
          </div>
        </div> */}

        {/* Timeline */}
        <div className="py-2">
          {categories.map((category, catIndex) => (
            <div key={category.id} className="space-y-2 my-4">
              <div
                onClick={() => toggleCategory(catIndex, category.cat_id)}
                className="flex gap-3 items-center h-16 rounded-md hover:bg-[#E8F0F5] border-b-[1px] px-2 border-b-[#E8F0F5] group cursor-pointer"
              >
                <Image
                  src={fever}
                  alt="fever"
                  width={50}
                  height={50}
                  className="bg-[#E8F0F5] p-3 rounded-md group-hover:bg-[#fff]"
                />
                <div className="flex justify-between w-full">
                  <div className="flex flex-col">
                    <h2 className="text-[14px] font-semibold text-[#393939]">
                      {category.cat_name_en}
                    </h2>
                    <span className="text-sm text-[#7E7E7E]">
                      Subcategory: {category.no_of_subcat}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center border-l-2 border-[#E8F0F5] pl-3">
                    <p className="text-base text-[#393939] font-semibold">
                      {category.no_of_dua}
                    </p>
                    <p className="text-sm text-[#7E7E7E] font-light">Dua</p>
                  </div>
                </div>
              </div>

              {/* Expandable category */}
              {openIndex === catIndex && (
                <div className="px-2 my-4 ml-4">
                  <div className="relative border-l-[3px] border-dotted border-green-400 pl-[8px]">
                    {getSubcategoriesForCategory(category.cat_id).map(
                      (subcat, stepIndex) => (
                        <div key={subcat.id} className="mb-6 relative">
                          {/* Large dot */}
                          <div
                            className={`absolute -left-[13px] w-[6px] h-[6px] rounded-full bg-green-500 transition-all top-[6px]`}
                          ></div>

                          {/* Step title */}
                          <div
                            className={`cursor-pointer text-base font-[500] ${
                              activeIndex === stepIndex
                                ? "text-green-500"
                                : "text-[#373737]"
                            }`}
                            onClick={() =>
                              toggleStep(stepIndex, subcat.subcat_id)
                            }
                          >
                            {subcat.subcat_name_en}
                          </div>

                          {/* Expandable step content */}
                          <AnimatePresence>
                            {expandedStep === stepIndex && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 text-green-600"
                              >
                                {getDuasForSubcategory(subcat.subcat_id).map(
                                  (dua) => (
                                    <p
                                      key={dua.id}
                                      className="text-[#373737] text-[13px] font-[500] my-3 pl-3"
                                    >
                                      {dua.dua_name_en}
                                    </p>
                                  )
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopUpTimeLine;
