export default function ServiceCard() {
  return (
    <article className="bg-woodTexture relative mb-4 rounded bg-cover p-4 shadow-md">
      <div className="absolute inset-0 z-20 bg-grayLight opacity-50"></div>
      <div className="relative z-30 opacity-100">
        <img
          src="/images/shower.jpg"
          alt="remodeled shower"
          className="mb-4 rounded border-2 border-grayDark shadow-md"
        />
        <div className="mx-auto mb-4 w-11/12 border-b-2 border-whiteLight">
          <h3 className="font-heading text-2xl">
            Kitchen and bathroom remodels
          </h3>
        </div>
        <p className="font-standard text-[15px]">
          Let us turn your dream kitchen and bathroom into a luxurious reality
          that reflects your style and needs.
        </p>
      </div>
    </article>
  );
}
