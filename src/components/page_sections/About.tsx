import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 px-4 text-center font-heading text-grayDark"
    >
      <SectionHeading headingTitle="About" headingColor="grayDark" />
      <p className="mb-4">
        We are a general building contractor serving the Nevada and Placer
        county areas.
      </p>
      <p className="mb-4">
        Our experienced team is committed to client satisfaction with an
        emphasis on precision and quality. We value the client relationship. We
        work closely with the client to ensure that the project stays on budget
        and on schedule.
      </p>
      <p className="mb-4">
        Our expertise is custom carpentry and general home repair. We specialize
        in a wide range of projects large and small including new construction,
        full remodels, additions, decks, and storm/dry rot repair.
      </p>
    </section>
  );
}
