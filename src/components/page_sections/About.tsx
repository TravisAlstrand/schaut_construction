import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 px-4 text-center font-heading text-grayDark xl:mb-24"
    >
      <SectionHeading headingTitle="About" headingColor="grayDark" />
      <div className="max-w-[1400px] sm:mx-auto sm:w-9/12 md:text-2xl xl:text-3xl">
        <p className="mb-4 md:mb-6">
          We are a general building contractor serving the Nevada and Placer
          county areas.
        </p>
        <p className="mb-4 md:mb-6">
          Our experienced team is committed to client satisfaction with an
          emphasis on precision and quality. We value the client relationship.
          We work closely with the client to ensure that the project stays on
          budget and on schedule.
        </p>
        <p className="mb-4 md:mb-6">
          Our expertise is custom carpentry and general home repair. We
          specialize in a wide range of projects large and small including new
          construction, full remodels, additions, decks, and storm/dry rot
          repair.
        </p>
      </div>
    </section>
  );
}
