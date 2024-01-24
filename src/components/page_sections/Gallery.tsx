import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionHeading from "../SectionHeading";

import { images } from "../../json/carouselImages.json";

export default function Gallery() {
  return (
    <section id="gallery" className="my-16 px-4 xl:my-24">
      <SectionHeading headingTitle="Gallery" headingColor="grayDark" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="rounded-md bg-grayDark shadow-lg sm:mx-auto sm:w-9/12 md:max-w-xl xl:max-w-2xl"
      >
        <CarouselContent className="flex items-center">
          {images.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={image.imgUrl}
                  alt={image.imgAltText}
                  className="mx-auto rounded-md"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 text-grayDark opacity-80 sm:-left-10 sm:bg-grayDark sm:text-whiteLight sm:opacity-100 xl:-left-14 xl:h-12 xl:w-12" />
        <CarouselNext className="-right-4 text-grayDark opacity-80 sm:-right-10 sm:bg-grayDark sm:text-whiteLight sm:opacity-100 xl:-right-14 xl:h-12 xl:w-12" />
      </Carousel>
    </section>
  );
}
