import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Htext from "./components/Htext";

import logo from "../../../Assets/landing.jpg";
import rna_img from "../../../Assets/rna.png";
import soma_img from "../../../Assets/Somalogic.png";
import ukb_img from "../../../Assets/ukb.png";

import meta_img from "../../../Assets/Metabolon.png";

import FlashOnIcon from "@mui/icons-material/FlashOn";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function Slide(props) {
  return (
    <div
      className="w-[100%] flex rounded-md"
      style={{ border: "1px solid rgb(240, 244, 248)", boxShadow: "none" }}
    >
      <div
        className="w-[40%] h-[220px] grid place-items-center"
        style={{ borderRight: "1px solid rgb(240, 244, 248)" }}
      >
        <img className="w-[90%] h-[90%] " src={props.logo} />
      </div>
      <div className="w-[60%] grid place-items-center text-left ">
        <h1 className=" text-2xl tracking-tight font-extrabold font-sans text-indigo-600 sm:text-2xl md:text-2xl w-[90%] text-left">
          Associations with phenotypes in UK biobank
        </h1>

        <div className="grid place-items-center w-[40%] mt-3 sm:mt-0 sm:ml-3 ">
          <a
            href="#"
            className=" w-full flex items-center justify-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-2 md:text-lg md:px-4"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

const Citation = () => {
  return (
    <div className="w-screen bg-white px-[5%] ">
  

      <div className="py-10 w-full float-left grid place-items-center">
        <h1
          style={{ "font-family": "Poppins", fontWeight: "1000px" }}
          className="text-xl pl-0 tracking-tight font-extrabold font-sans text-gray-900 sm:text-4xl md:text-3xl"
        >
          <span className=" text-indigo-600 inline">
            <FlashOnIcon className="mx-2"></FlashOnIcon>
          </span>
          Citation


        </h1>
      </div>


      <div style={{width :"100%"}} className="mySwiper w-[100%] overflow-visible rounded-sm">
        <p className="text-justify mt-3 w-[100%] text-base text-gray-500 sm:mt-5 sm:text-lg sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-2">
          OMICSPRED is under active development, and we will continue to add
          genetic scores. If you use OMICSPRED in your research, we ask that you
          cite our submitted ASHG 2021 abstract for now (below). A full
          manuscript is in preparation and is anticipated to be preprinted in
          Q3/Q4 2021.{" "}
        </p>
        <p className=" text-justify nmt-3 w-[100%] text-base text-gray-500 sm:mt-5 sm:text-lg sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-2">
          Manuscript: Xu Y. et al. An atlas of genetic scores to predict
          multi-omic biomolecular traits in blood. (in preparation)
        </p>
        <p className=" text-justify mt-3 w-[100%] text-base text-gray-500 sm:mt-5 sm:text-lg sm:w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-2">
          ASHG Abstract: Yu Xu, Scott Ritchie, Maik Pietzner, Samuel Lambert,
          Sebastian May-Wilson, Artika Nath, Praveen Surendran, ??sa Johansson,
          Elodie Persyn, Lo??c Lannelongue, Bram Prins, Nicola Pirastu, Dirk
          Paul, Christopher Yau, James F. Wilson, Claudia Langenberg, Anders
          M??larstig, John Danesh, Adam Butterworth, Michael Inouye. <span className="font-bold text-indigo-600">
             genetic scores to predict multi-omic biomolecular traits in blood.
          </span> An atlas of
         
          American Society of Human Genetics (2021)
        </p>
      </div>
    </div>
  );
};
export default Citation;
