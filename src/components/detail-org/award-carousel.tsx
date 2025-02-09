"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CloudinaryImg from "../../utils/helper/use-cloudinary-img";

export default function AwardsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const awards = [
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124474/best_2_performance_industri_nasiona_ert2fu.png",
      title: "The Best 2 Performance",
      subtitle: "Industri Nasional 2013",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124474/best_1_sales_growth_p13xx5.png",
      title: "The Best 1 Sales Growth",
      subtitle: "Industri Nasional 2015",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124475/best_cluster_management_badhur.png",
      title: "The Best Cluster Management",
      subtitle: "SR VI 2018",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124472/best_performance_vendor_held_stock_websav.png",
      title: "The Best Performance For Vendor Held Stock",
      subtitle: "PT Mandala Karya Prima 2020",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124472/best_performance_sales_force_gnyeh1.png",
      title: "The Best Performance Sales Force Gold",
      subtitle: "SR VI 2019",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124472/best_territory_management_phwden.png",
      title: "The Best Territory Management",
      subtitle: "Territory Tarakan SR VI 2019",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124472/best_customer_acquisition_aw1kmk.png",
      title: "The Best Customer Acquisition",
      subtitle: "SR VI 2019",
    },
    {
      image:
        "https://res.cloudinary.com/rafirfansyah/image/upload/v1739124472/best_performance_sales_force_silver_wandn4.png",
      title: "The Best Performance Sales Force Silver",
      subtitle: "SR VI 2019",
    },
    // Additional awards to make up 17 total
    ...Array(9).fill({
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P6RfYvSR5rWCQs9v6RadQnoBAlo6hP.png",
      title: "Achievement Award",
      subtitle: "Category 2023",
    }),
  ];

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
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">
          Multiple <span className="text-gray-400">Awards</span>
        </h2>

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
                        <h3 className="text-sm font-semibold text-white">{award.title}</h3>
                        <p className="mt-1 text-xs text-gray-400">{award.subtitle}</p>
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
            className={`bg-red-600 p-3 rounded-lg transition-colors ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            }`}
            disabled={isTransitioning || currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className={`bg-red-600 p-3 rounded-lg transition-colors ${
              currentSlide >= maxSlide ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
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
