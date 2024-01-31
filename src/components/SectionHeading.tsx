type HeadingProps = {
  headingTitle: string;
  headingColor: string;
};

export default function SectionHeading({
  headingTitle,
  headingColor,
}: HeadingProps) {
  return (
    <div
      className={`mx-auto mb-12 w-2/3 border-b-2 border-${headingColor} max-w-[1000px] text-center font-heading`}
    >
      <h2
        className={`text-[44px] text-${headingColor} md:pb-6 md:text-6xl xl:text-7xl`}
      >
        {headingTitle}
      </h2>
    </div>
  );
}
