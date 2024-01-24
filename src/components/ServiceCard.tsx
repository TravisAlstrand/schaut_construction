type ServiceDataProps = {
  serviceTitle: string;
  serviceDescription: string;
  serviceImgUrl: string;
  serviceImgAlt: string;
};

export default function ServiceCard({
  serviceTitle,
  serviceDescription,
  serviceImgUrl,
  serviceImgAlt,
}: ServiceDataProps) {
  return (
    <article className="relative mb-4 rounded-md border-2 border-grayDark-darker bg-woodTexture bg-cover p-4 shadow-lg shadow-grayDark-darker sm:mx-auto sm:w-9/12 md:w-full">
      <div className="absolute inset-0 z-20 rounded-md bg-grayLight opacity-50"></div>
      <div className="relative z-30 opacity-100 md:h-full">
        <div>
          <img
            src={serviceImgUrl}
            alt={serviceImgAlt}
            className="mx-auto mb-4 rounded-md border-2 border-grayDark-darker shadow-lg shadow-grayDark-darker md:max-h-[243px]"
          />
        </div>
        <div>
          <div className="mx-auto mb-4 w-11/12 border-b-2 border-whiteLight">
            <h3 className="font-heading text-2xl md:text-3xl xl:text-4xl">
              {serviceTitle}
            </h3>
          </div>
          <p className="font-standard text-[15px] md:text-base xl:text-lg">
            {serviceDescription}
          </p>
        </div>
      </div>
    </article>
  );
}
