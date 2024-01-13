import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-grayDark px-4 pb-12 pt-16 text-center text-whiteLight"
    >
      <div className="mx-auto mb-4 w-2/3 border-b-2 border-whiteLight">
        <h2 className="font-heading text-[44px]">Services</h2>
      </div>
      <ServiceCard />
    </section>
  );
}
