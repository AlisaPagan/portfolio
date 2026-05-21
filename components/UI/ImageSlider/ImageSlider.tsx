"use client";
import styles from "./ImageSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import Image from "next/image";
import { SwiperModule } from "swiper/types";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  className?: string;
  sliderId: string;
  slidesPerView: number;
  slidesPerviewTablet?: number;
  slidesPerViewDesktop?: number;
  speed?: number;
  modules?: SwiperModule[];
  preventInteractionOnTransition?: boolean;
};

function ImageSlider() {}

export default ImageSlider;
