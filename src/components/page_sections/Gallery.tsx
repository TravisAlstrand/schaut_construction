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
    <section id="gallery" className="my-16 px-4">
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
        className="rounded-md bg-grayDark shadow-lg"
      >
        <CarouselContent className="flex items-center">
          {images.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img
                  src={image.imgUrl}
                  alt={image.imgAltText}
                  className="rounded-md"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 text-grayDark opacity-80" />
        <CarouselNext className="-right-4 text-grayDark opacity-80" />
      </Carousel>
    </section>
  );
}
