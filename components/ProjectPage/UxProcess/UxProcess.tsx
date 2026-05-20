"use client";

import styles from "./UxProcess.module.css";
import { Project } from "@/components/Home/Projects/project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import Button from "@/components/UI/Button/Button";
import Icon from "@/components/UI/Icon/Icon";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

type UxProcessProps = {
  project: Project;
};

function UxProcess({ project }: UxProcessProps) {
  return (
    <section className={`${styles.uxProcess} section`}>
      <div className={styles.glow}></div>
      <div className={`${styles.sectionWrapper} container`}>
        <div className={styles.slider}>
          <Swiper
            className={styles.imgSwiper}
            modules={[Navigation]}
            slidesPerView={1}
            preventInteractionOnTransition={true}
            speed={450}
            navigation={{
              prevEl: ".imagePrev",
              nextEl: ".imageNext",
            }}
            scrollbar={{ draggable: true }}
          >
            {project.wireframes?.map((image) => (
              <SwiperSlide key={image.src} className={styles.imgContainer}>
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
              className={`${styles.navButton} imagePrev`}
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
              className={`${styles.navButton} imageNext`}
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

        <div className={styles.content}>
          <h2 className={styles.title}>Design Process</h2>
          <p className={styles.description}>{project.designProcess}</p>
        </div>
      </div>
    </section>
  );
}

export default UxProcess;
