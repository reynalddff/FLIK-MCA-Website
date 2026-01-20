import { NavLink, Link } from "react-router-dom";
import imgLogoFLIK from '/Users/reynalddaffa/Downloads/FLIK MCA Website/src/assets/LogoFLIK.png';

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
      <NavItem to={"/merchant-kami"} label="Cerita Merchant" />
      <NavItem to="/tentang-flik" label="Tentang FLIK" />
    </div>
  );
}

function Button() {
  return (
    <Link
      to="/forms"
      className="bg-[#701bc1] content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[200px] cursor-pointer transition-colors duration-300 hover:bg-[#4A1280]"
      data-name="Button"
    >
      <p className="leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-pre" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>
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

export default function Navbar() {
  return (
    <div
      className="content-stretch flex items-center justify-center px-0 py-[24px] mx-0 relative shrink-0 w-full"
      data-name="Navbar"
    >
      <Container />
    </div>
  );
}