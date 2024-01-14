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
      className={`mx-auto mb-8 w-2/3 border-b-2 border-${headingColor} text-center font-heading`}
    >
      <h2 className={`text-[44px] text-${headingColor}`}>{headingTitle}</h2>
    </div>
  );
}
