import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

//-- my imports
import styles from "../styles/section.module.css";
import coding from "../../public/coding.png";
import create from "../../public/create.png";
import teamwork from "../../public/teamwork.png";

import { useTranslations } from "next-intl";

export default function About4() {
  const t = useTranslations("About");

  return (
    <>
      <section id="home">
        {/* main container */}
        <div className="flex flex-wrap bg-[#262923] min-w-screen min-h-screen ">
          {/* content */}
          <div className="flex flex-wrap flex-row min-w-full items-center pt-20 justify-end gap-x-40 ">
            {/* title, subtitle and text */}
            <div className="flex flex-wrap flex-row justify-center">
              <div className="flex flex-col flex-wrap max-w-[800px] gap-4 p-10 md:p-0">
                <div className="text-[#fca04f] text-[20px] md:text-md">
                  {t("forYouHeader")}
                </div>
                <div className="text-[#ebeae4] font-bold text-4xl md:text-5xl tracking-[.10em] ">
                  {" "}
                  {t("forYouTitle")}
                </div>
                <div className="h-1 w-24 bg-[#fca04f]"></div>
                <div className=" pt-4 text-xl md:text-2xl text-[#9a9793] font-bold">
                  {" "}
                  {t("forYouSubtitle")}{" "}
                </div>
                <div className="text-xl text-[#9a9793]">
                  {t("forYouDescription")}
                </div>
              </div>
            </div>
            {/* ----- side image */}

            <div className="flex max-w-[400px] max-h-[160px] md:max-w-[600px] md:max-h-[300px] z-0 bg-[#fca04f] rounded-l-full">
              <div className="z-10 max-w-[220px] md:max-w-[400px] pr-24 ">
                <motion.div
                  initial={{ x: 100, scale: 0.8, opacity: 0 }}
                  whileInView={{ x: 0, scale: 1.0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Image src={teamwork} alt="" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
