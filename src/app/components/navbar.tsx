import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import imgLogoFLIK from "../../assets/LogoFLIK.png";

import "../../styles/index.css";

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Go to homepage"
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Logo"
    >
      <div
        className="h-[32px] relative shrink-0 w-[89px] cursor-pointer"
        data-name="Logo FLIK-02 3"
      >
        <img
          alt="FLIK"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLogoFLIK}
        />
      </div>
    </Link>
  );
}

type NavItemProps = {
  to: string;
  label: string;
  end?: boolean; // kalau route exact match
};

function NavItem({ to, label, end = true }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      className={({ isActive }) =>
        [
          "content-stretch flex items-center justify-center relative shrink-0 cursor-pointer group",
          "font-['Satoshi:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] whitespace-pre transition-colors",
          isActive
            ? "text-[#6A3EC9] underline underline-offset-8"
            : "text-[#111928] hover:text-[#6A3EC9]",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

function Navs() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[36px] items-center justify-center min-h-px min-w-px relative"
      data-name="Navs"
    >
      <NavItem to={"/merchant"} label="Cerita Merchant" />
      <NavItem to="/tentang-flik" label="Tentang FLIK" />
    </div>
  );
}

function Button() {
  return (
    <Link
      to="/forms"
      className="bg-[#701bc1] content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[220px] cursor-pointer transition-colors duration-300 hover:bg-[#4A1280]"
      data-name="Button"
    >
      <p
        className="leading-[1.5] not-italic relative shrink-0 text-[16px] text-white  whitespace-pre"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Ceritakan Kebutuhanmu
      </p>
    </Link>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] items-center max-w-[1080px] min-h-px min-w-px relative"
      data-name="Container"
    >
      <Logo />
      <Navs />
      <Button />
    </div>
  );
}

function MobileNavItem({ to, label, end = true }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      className={({ isActive }) =>
        [
          "content-stretch flex items-center justify-center relative shrink-0 cursor-pointer",
          "leading-[1.5] not-italic relative text-[16px] whitespace-pre transition-colors",
          isActive
            ? "text-[#701BC1] underline underline-offset-8"
            : "text-[#111928]",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

function MobileButton() {
  return (
    <Link
      to="/forms"
      className="bg-[#701bc1] content-stretch flex h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[12px] shrink-0 w-full max-w-[320px] cursor-pointer transition-colors duration-300 hover:bg-[#4A1280]"
      data-name="Button mobile"
    >
      <p
        className="leading-[1.5] not-italic relative shrink-0 text-[16px] text-white whitespace-pre"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Ceritakan Kebutuhanmu
      </p>
    </Link>
  );
}

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={[
        "content-stretch flex flex-col gap-[28px] items-center justify-center px-[24px] relative w-full overflow-hidden transition-all duration-400 ease-out",
        isOpen
          ? "max-h-[320px] py-[24px] opacity-100"
          : "max-h-0 py-0 opacity-0",
      ].join(" ")}
      data-name="Mobile menu"
      aria-hidden={!isOpen}
    >
      <MobileNavItem to={"/merchant"} label="Merchant Kami" />
      <MobileNavItem to="/tentang-flik" label="Tentang FLIK" />
      <MobileButton />
    </div>
  );
}

function MobileToggle({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="block size-[28px]"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {isOpen ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="#111928"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <>
          <path
            d="M4 7H20"
            stroke="#111928"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M4 12H20"
            stroke="#111928"
            strokeLinecap="round"
            strokeWidth="2"
          />
          <path
            d="M4 17H20"
            stroke="#111928"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
}

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={[
        "content-stretch flex flex-col items-center justify-center px-0 py-[20px] mx-0 relative shrink-0 w-full transition-shadow duration-400 ease-out",
        isOpen ? "shadow-[0_12px_30px_rgba(17,25,40,0.12)]" : "shadow-none",
      ].join(" ")}
      data-name="Navbar mobile"
    >
      <div
        className="content-stretch flex items-center justify-between px-[24px] relative shrink-0 w-full"
        data-name="Mobile top bar"
      >
        <Logo />
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="content-stretch flex items-center justify-center relative size-[40px] cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MobileToggle isOpen={isOpen} />
        </button>
      </div>
      <MobileMenu isOpen={isOpen} />
    </div>
  );
}

function useIsMobile(maxWidth: number) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const update = () => setIsMobile(media.matches);

    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, [maxWidth]);

  return isMobile;
}

export default function Navbar() {
  const isMobile = useIsMobile(800);

  if (isMobile) {
    return <NavbarMobile />;
  }

  return (
    <div
      className="content-stretch flex items-center justify-center px-0 py-[24px] mx-0 relative shrink-0 w-full"
      data-name="Navbar"
    >
      <Container />
    </div>
  );
}
