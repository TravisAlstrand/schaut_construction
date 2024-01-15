import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 px-4 pt-16 text-grayDark">
      <SectionHeading headingTitle="Contact" headingColor="grayDark" />
      <div className="text-center">
        <p className="mb-4">
          Reach out to us for a personalized quote, any questions, or to share
          your experience with us
        </p>
        <p className="mb-8">— we're here to help you every step of the way!</p>
      </div>
      <div>
        <ContactForm />
        <h3 className="mb-4 text-center font-heading text-3xl">
          Schaut Construction
        </h3>
        <div className="font-standard text-[15px]">
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
