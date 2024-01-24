import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="my-16 px-4 text-grayDark xl:my-24">
      <SectionHeading headingTitle="Contact" headingColor="grayDark" />
      <div className="text-center sm:mx-auto sm:w-9/12 xl:text-lg">
        <p className="mb-4">
          Reach out to us for a personalized quote, any questions, or to share
          your experience with us
        </p>
        <p className="mb-8">— we're here to help you every step of the way!</p>
      </div>
      <div className="sm:mx-auto sm:w-9/12">
        <ContactForm />
        <h3 className="mb-4 text-center font-heading text-3xl md:text-4xl xl:text-5xl">
          Schaut Construction
        </h3>
        <div className="font-standard text-[15px] md:text-base xl:text-lg">
          <p className="mb-2">
            PHONE:{" "}
            <a href="tel:+1707-355-2944" className="text-orangeLink underline">
              707-355-2944
            </a>
          </p>
          <p className="mb-2">
            EMAIL:{" "}
            <a
              href="mailto:stephanie@schautconstruction.com"
              className="text-orangeLink underline"
            >
              stephanie@schautconstruction.com
            </a>
          </p>
          <p className="mb-2">LICENSE: #1027835</p>
        </div>
      </div>
    </section>
  );
}
