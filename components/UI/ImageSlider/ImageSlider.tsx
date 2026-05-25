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

import "swiper/css";
import "swiper/css/navigation";

type GalleryImage = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  images: GalleryImage[];
  className?: string;
  slideClassName?: string;
  navId: string;

  slidesPerView?: number;
  slidesPerViewTablet?: number;
  slidesPerViewDesktop?: number;

  speed?: number;
  modules?: SwiperModule[];
  preventInteractionOnTransition?: boolean;

  spaceBetween?: number;
  spaceBetweenTablet?: number;
  spaceBetweenDesktop?: number;
};

function ImageSlider({
  images,
  className,
  slideClassName,
  navId,
  slidesPerView = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,

  speed = 450,
  modules = [Navigation],
  preventInteractionOnTransition = true,
  spaceBetween = 24,
  spaceBetweenTablet = 32,
  spaceBetweenDesktop = 40,
}: ImageSliderProps) {
  const prevClass = `${navId}Prev`;
  const nextClass = `${navId}Next`;

  return (
    <>
      <div className={styles.slider}>
        <Swiper
          className={className}
          slidesPerView={slidesPerView}
          speed={speed}
          modules={modules}
          preventInteractionOnTransition={preventInteractionOnTransition}
          spaceBetween={spaceBetween}
          navigation={{ prevEl: `.${prevClass}`, nextEl: `.${nextClass}` }}
          breakpoints={{
            768: {
              slidesPerView: slidesPerViewTablet,
              spaceBetween: spaceBetweenTablet,
            },
            1440: {
              slidesPerView: slidesPerViewDesktop,
              spaceBetween: spaceBetweenDesktop,
            },
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.src} className={slideClassName}>
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className={styles.img}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.sliderControls}>
          <Button
            variant="secondary"
            className={`${styles.navButton} ${prevClass}`}
            aria-label="Previous image"
          >
            <Icon
              icon={GoChevronLeft}
              size={24}
              className={styles.controlsIcon}
            />
          </Button>

          <Button
            variant="secondary"
            className={`${styles.navButton} ${nextClass}`}
            aria-label="Next image"
          >
            <Icon
              icon={GoChevronRight}
              size={24}
              className={styles.controlsIcon}
            />
          </Button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
