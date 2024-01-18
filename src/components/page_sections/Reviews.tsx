import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionHeading from "../SectionHeading";
import ReviewCard from "../ReviewCard";

import { reviews } from "../../json/reviews.json";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-grayDark px-4 pb-12 pt-16 text-whiteLight"
    >
      <SectionHeading headingTitle="Reviews" headingColor="whiteLight" />
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
        className="rounded-md bg-grayDark sm:mx-auto sm:w-9/12 md:max-w-[580px]"
      >
        <CarouselContent className="flex items-center">
          {reviews.map((review, index) => {
            return (
              <CarouselItem key={index}>
                <ReviewCard
                  reviewerName={review.reviewerName}
                  reviewText={review.reviewText}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-4 text-grayDark opacity-80 sm:-left-10 sm:opacity-100" />
        <CarouselNext className="-right-4 text-grayDark opacity-80 sm:-right-10 sm:opacity-100" />
      </Carousel>
    </section>
  );
}
