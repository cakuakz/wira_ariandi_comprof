"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CloudinaryImg from "../../utils/helper/use-cloudinary-img";
import { awards } from "../../utils/static/etam-awards";

export default function AwardsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = awards.length;

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlidesPerView = () => {
    if (windowWidth >= 1024) return 4;
    if (windowWidth >= 768) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };

  const slidesPerView = getSlidesPerView();
  const maxSlide = Math.max(0, totalSlides - slidesPerView);

  const nextSlide = useCallback(() => {
    if (!isTransitioning && currentSlide < maxSlide) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, currentSlide, maxSlide]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning && currentSlide > 0) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, currentSlide]);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [nextSlide, prevSlide]);

  return (
    <section className="py-12 px-5 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-transparent text-center bg-clip-text bg-[radial-gradient(circle_at_center,_#F9F9F9_0%,_#6A6A6A_100%)] font-semibold text-4xl lg:text-5xl mx-auto leading-relaxed">
            Company Awards
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
              }}
            >
              {awards.map((award, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div>
                    <div className="flex flex-col items-center p-4">
                      <div className="relative mb-4 aspect-square w-full overflow-hidden">
                        <CloudinaryImg
                          src={award.image || "/placeholder.svg"}
                          className="object-contain w-full lg:w-1/4 md:w-1/3 sm:w-1/2"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-white">{award.title.toUpperCase()}</h3>
                        <p className="mt-1 text-xs text-gray-400">{award.subtitle.toUpperCase()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className={`bg-gradient-to-r from-[#EB1E1E] to-[#851111] py-2 px-1.5 rounded-lg transition-colors ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isTransitioning || currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className={`bg-gradient-to-r from-[#EB1E1E] to-[#851111] py-2 px-1.5 rounded-lg transition-colors ${
              currentSlide >= maxSlide ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={isTransitioning || currentSlide >= maxSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
