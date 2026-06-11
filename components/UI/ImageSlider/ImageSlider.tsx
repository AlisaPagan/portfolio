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

type ImageSliderVariant = "cover" | "scroll";

type ImageSliderProps = {
  images: GalleryImage[];
  variant?: ImageSliderVariant;
  className?: string;
  slideClassName?: string;
  navId: string;

  slidesPerView?: number;
  slidesPerViewTablet?: number;
  slidesPerViewDesktop?: number;
  imageSizes?: string;

  speed?: number;
  modules?: SwiperModule[];
  preventInteractionOnTransition?: boolean;

  spaceBetween?: number;
  spaceBetweenTablet?: number;
  spaceBetweenDesktop?: number;
};

function ImageSlider({
  images,
  variant,
  className,
  slideClassName,
  navId,
  slidesPerView = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  imageSizes = "(max-width: 767px) 375px, (max-width: 1439px) 364px, 696px",

  speed = 450,
  modules = [Navigation],
  preventInteractionOnTransition = true,
  spaceBetween = 24,
  spaceBetweenTablet = 32,
  spaceBetweenDesktop = 40,
}: ImageSliderProps) {
  const prevClass = `${navId}Prev`;
  const nextClass = `${navId}Next`;

  const frameClass =
    variant === "scroll" ? styles.scrollFrame : styles.coverFrame;

  const imgClass = variant === "scroll" ? styles.scrollImg : styles.coverImg;

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
            <SwiperSlide key={image.src}>
              <div className={`${frameClass} ${slideClassName ?? ""}`.trim()}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1920}
                  height={1920}
                  className={imgClass}
                  sizes={imageSizes}
                ></Image>
              </div>
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
