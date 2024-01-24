type ReviewDataProps = {
  reviewerName: string;
  reviewText: string;
};

export default function ReviewCard({
  reviewerName,
  reviewText,
}: ReviewDataProps) {
  return (
    <article className="relative mb-4 rounded-md border-2 border-grayDark-darker bg-woodTexture bg-cover p-4 shadow-lg shadow-grayDark-darker">
      <div className="absolute inset-0 z-20 rounded-md bg-grayLight opacity-50"></div>
      <div className="relative z-30 flex flex-col justify-between opacity-100">
        <p className="mb-6 font-standard text-[15px] md:text-base xl:text-lg">
          "{reviewText}"
        </p>
        <div className="w-3/4 border-t-2 border-whiteLight">
          <h3 className="font-heading text-[44px] xl:pt-4 xl:text-6xl">
            {reviewerName}
          </h3>
        </div>
      </div>
    </article>
  );
}
