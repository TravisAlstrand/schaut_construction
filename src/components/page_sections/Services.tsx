import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import { services } from "../../json/services.json";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-grayDark px-4 pb-12 pt-16 text-center text-whiteLight"
    >
      <SectionHeading headingTitle="Services" headingColor="whiteLight" />
      <div className="md:grid md:grid-cols-2 md:gap-2">
        {services.map((service, index) => {
          return (
            <ServiceCard
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
              serviceImgUrl={service.serviceImgUrl}
              serviceImgAlt={service.serviceImgAlt}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
