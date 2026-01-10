import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react";
import LightboxImage from "./LightboxImage";

export default function ImageCarousel({ images }) {
  const scrollButtonBaseClasses = `
    absolute top-1/2 hidden h-10 w-10 
    -translate-y-1/2 items-center justify-center 
    rounded-full border shadow sm:flex `

  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  })

  const imageCount = images.length

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    // Initial value
    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const multiImage = imageCount > 1

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        {/* IMPORTANT: no gap, no justify-center */}
        <div className="flex">
          {images.map((image, idx) => (
            <div
              key={`${image.alt}-${idx}`}
              className="shrink-0 w-full"
            >
              <figure className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                <div className="bg-gray-50">
                  <LightboxImage image={image.content} alt={image.alt} />
                </div>

                <figcaption className="border-t border-gray-100 px-4 py-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {image.alt}
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      
      {/* Only display scroll buttons if we have more than 1 image. Scroll
          buttons are grayed out if we have reached the end*/}
      {
        multiImage && (<>
            <button
              type="button"
              className={
                scrollButtonBaseClasses + 
                "left-2 " +
                ((currentIndex == 0) ? "bg-gray-400" : "bg-white")
              }
              onClick={scrollPrev}
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              type="button"
              className={
                scrollButtonBaseClasses +
                "right-2 " +
                ((currentIndex == imageCount - 1) ? "bg-gray-400" : "bg-white")
              }
              onClick={scrollNext}
              aria-label="Next"
            >
              ›
            </button>
            </>
          )
      }
      
      
    </div>
  )
}