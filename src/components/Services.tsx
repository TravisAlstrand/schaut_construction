import ServiceCard from "./ServiceCard";
import { services } from "../json/services.json";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-grayDark px-4 pb-12 pt-16 text-center text-whiteLight"
    >
      <div className="mx-auto mb-8 w-2/3 border-b-2 border-whiteLight">
        <h2 className="font-heading text-[44px]">Services</h2>
      </div>
      {services.map((service, index) => {
        return (
          <ServiceCard
            serviceTitle={service.serviceTitle}
            serviceDescription={service.serviceDescription}
            serviceImgUrl={service.serviceImgUrl}
            key={index}
          />
        );
      })}
    </section>
  );
}
