export default function Hero() {
  return (
    <section className="relative mb-16">
      <img
        src="/images/gazebo_kitchen.jpg"
        alt="image of a gazebo with outdoor kitchen"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/65"></div>
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="mx-4 text-center font-heading text-[44px] text-whiteLight">
          <h1>Building Your Dreams Into Reality</h1>
        </div>
      </div>
    </section>
  );
}
