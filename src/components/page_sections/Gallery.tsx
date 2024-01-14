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
        className="bg-grayDark"
      >
        <CarouselContent className="flex items-center">
          {images.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <img src={image.imgUrl} alt={image.imgAltText} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>
    </section>
  );
}
