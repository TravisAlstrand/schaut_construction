type ServiceDataProps = {
  serviceTitle: string;
  serviceDescription: string;
  serviceImgUrl: string;
};

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceImgUrl,
}: ServiceDataProps) {
  return (
    <article className="relative mb-4 rounded-md bg-woodTexture bg-cover p-4 shadow-lg">
      <div className="absolute inset-0 z-20 rounded-md bg-grayLight opacity-50"></div>
      <div className="relative z-30 opacity-100">
        <img
          src={serviceImgUrl}
          alt="remodeled shower"
          className="mb-4 rounded-md border-2 border-grayDark shadow-lg"
        />
        <div className="mx-auto mb-4 w-11/12 border-b-2 border-whiteLight">
          <h3 className="font-heading text-2xl">{serviceTitle}</h3>
        </div>
        <p className="font-standard text-[15px]">{serviceDescription}</p>
      </div>
    </article>
  );
}
