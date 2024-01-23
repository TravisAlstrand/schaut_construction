import { useState } from "react";

import hamburgerIcon from "/icons/bars-solid.svg";
import closeIcon from "/icons/xmark-solid.svg";

export default function Header() {
  //state of mobile nav menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky left-0 top-0 z-50 flex h-[97px] w-full items-center border-b-2 border-grayDark-darker bg-grayDark px-8 shadow-lg shadow-grayDark-darker lg:h-fit">
        {/* empty left container */}
        <div className="flex-1 lg:hidden"></div>
        {/* center logo container */}
        <div className="flex flex-1 justify-center lg:justify-start">
          <img
            src="/logo/logo_white.png"
            alt="Schaut Construction Logo"
            className="w-16 py-4 lg:w-20 lg:py-6"
          />
        </div>
        {/* right nav icon container */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Navigation Menu"
            aria-expanded={isOpen}
            aria-controls="mobileNav"
          >
            <img
              src={isOpen ? closeIcon : hamburgerIcon}
              alt={isOpen ? "close icon" : "open icon"}
              className="w-7"
            />
          </button>
        </div>
        <nav
          id="mobileNav"
          aria-hidden={!isOpen}
          className={`transform-[visibility] invisible absolute left-0 top-[97px] z-50 w-full bg-grayDark pt-8 text-center font-heading text-3xl text-whiteLight underline opacity-0 transition-opacity duration-300 md:text-4xl
          ${isOpen ? "open" : ""}`}
        >
          <ul>
            <li className="pb-8">
              <a href="#" onClick={() => setIsOpen(!isOpen)}>
                Home
              </a>
            </li>
            <li className="pb-8">
              <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                About
              </a>
            </li>
            <li className="pb-8">
              <a href="#services" onClick={() => setIsOpen(!isOpen)}>
                Services
              </a>
            </li>
            <li className="pb-8">
              <a href="#gallery" onClick={() => setIsOpen(!isOpen)}>
                Gallery
              </a>
            </li>
            <li className="pb-8">
              <a href="#reviews" onClick={() => setIsOpen(!isOpen)}>
                Reviews
              </a>
            </li>
            <li className="pb-8">
              <a href="#contact" onClick={() => setIsOpen(!isOpen)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <nav
          id="desktopNav"
          className="hidden font-heading text-3xl text-whiteLight lg:flex"
        >
          <ul>
            <li className="pr-4">
              <a
                href="#"
                className="pr-4 transition-colors hover:text-orangeLink"
              >
                Home
              </a>
              <span>|</span>
            </li>
          </ul>
          <ul>
            <li className="pr-4">
              <a
                href="#about"
                className="pr-4 transition-colors hover:text-orangeLink"
              >
                About
              </a>
              <span>|</span>
            </li>
          </ul>
          <ul>
            <li className="pr-4">
              <a
                href="#services"
                className="pr-4 transition-colors hover:text-orangeLink"
              >
                Services
              </a>
              <span>|</span>
            </li>
          </ul>
          <ul>
            <li className="pr-4">
              <a
                href="#gallery"
                className="pr-4 transition-colors hover:text-orangeLink"
              >
                Gallery
              </a>
              <span>|</span>
            </li>
          </ul>
          <ul>
            <li className="pr-4">
              <a
                href="#reviews"
                className="pr-4 transition-colors hover:text-orangeLink"
              >
                Reviews
              </a>
              <span>|</span>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-orangeLink"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
