import hamburgerIcon from "/icons/bars-solid.svg";

export default function Header() {
  return (
    <>
      <header className="border-grayDark-darker sticky left-0 top-0 z-50 flex items-center border-b-2 bg-grayDark px-8 shadow-xl">
        {/* empty left container */}
        <div className="flex-1"></div>
        {/* center logo container */}
        <div className="flex flex-1 justify-center">
          <img
            src="/logo/logo_white.png"
            alt="Schaut Construction Logo"
            className="w-16 py-4"
          />
        </div>
        {/* right nav icon container */}
        <div className="flex flex-1 justify-end">
          <button>
            <img
              src={hamburgerIcon}
              alt="Mobile navigation open icon"
              className="w-6"
            />
          </button>
        </div>
      </header>
    </>
  );
}
