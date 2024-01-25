export default function Hero() {
  return (
    <section className="relative mb-16 lg:max-h-[calc(100vh-131px)] xl:mb-24">
      <img
        src="/images/gazebo_kitchen.jpg"
        alt="image of a gazebo with outdoor kitchen"
        className="h-full w-full object-cover lg:max-h-[calc(100vh-131px)]"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/65"></div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="mx-4 text-center font-heading text-[44px] text-whiteLight">
          <div className="rounded-md border-2 border-whiteLight">
            <h1 className="px-6 py-4 md:text-6xl xl:text-8xl">
              Schaut Construction
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
