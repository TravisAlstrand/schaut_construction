import hamburgerIcon from "/icons/bars-solid.svg";

export default function Header() {
  return (
    <>
      <header className="flex items-center bg-grayDark px-8 shadow-xl">
        {/* empty left section to center logo on mobile */}
        <div className="flex-1"></div>
        <div className="flex flex-1 justify-center">
          <img
            src="/logo/logo_white.png"
            alt="Schaut Construction Logo"
            className="w-16 py-4"
          />
        </div>
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
