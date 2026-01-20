import imgLogoFLIK from "../../src/assets/LogoFLIK.png";

const Links = () => {
  return (
    <div
      className="capitalize content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#111928] text-[16px] tracking-[-0.096px] whitespace-nowrap"
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      data-name="Links"
    >
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-solid leading-[24px] underline whitespace-pre">{`Syarat & Ketentuan`}</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-solid leading-[24px] underline whitespace-pre">
          kebijakan privasi
        </p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="decoration-solid leading-[24px] underline whitespace-pre">
          FAQs
        </p>
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div
      className="content-stretch flex items-end justify-between max-w-[1080px] relative shrink-0 w-[1080px]"
      data-name="Container"
    >
      <div className="flex flex-[1_0_0] flex-col justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#111928] text-[16px] tracking-[-0.096px]"
      style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 400}}>
        <p className="leading-[1.5] whitespace-pre-wrap">
          © Copyright 2026 All Rights Reserved by FLIK
        </p>
      </div>
      <div
        className="h-[23px] relative shrink-0 w-[64px]"
        data-name="Logo FLIK-02 3"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgLogoFLIK}
        />
      </div>
      <Links />
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Footer"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-center px-[80px] py-[40px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
};

export default Footer;