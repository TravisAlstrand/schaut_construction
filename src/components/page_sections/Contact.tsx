import SectionHeading from "../SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mb-16 px-4 pt-16 text-grayDark">
      <SectionHeading headingTitle="Contact" headingColor="grayDark" />
      <div className="text-center">
        <p className="mb-4">
          Reach out to us for a personalized quote, any questions, or to share
          your experience with us
        </p>
        <p className="mb-4">— we're here to help you every step of the way!</p>
      </div>
      <div>
        <h3 className="mb-4 text-center font-heading text-3xl">
          Schaut Construction
        </h3>
        <div className="font-standard text-[15px]">
          <p className="mb-2">PHONE: 707-355-2944</p>
          <p className="mb-2">EMAIL: stephanie@schautconstruction.com</p>
          <p className="mb-2">LICENSE: #1027835</p>
        </div>
      </div>
    </section>
  );
}
