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
      {reviews.map((review, index) => {
        return (
          <ReviewCard
            key={index}
            reviewerName={review.reviewerName}
            reviewText={review.reviewText}
          />
        );
      })}
    </section>
  );
}
