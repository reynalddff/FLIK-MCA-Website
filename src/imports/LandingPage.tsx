import Navbar from "./navbar";
import Footer from "./footer";
import CTASection from "./cta-section";
import Button from "../app/components/flik-button";

import svgPaths from "./svg-yaeic72sto";

import imgContentImage from "/Users/reynalddaffa/Downloads/FLIK MCA Website/src/assets/ImageThumbnailEmados.png";
import imgContentImage1 from "/Users/reynalddaffa/Downloads/FLIK MCA Website/src/assets/ImageThumbnailHeylocal.png";
import imgContentImage2 from "/Users/reynalddaffa/Downloads/FLIK MCA Website/src/assets/ImageThumbnailErigo.png";

function Buttons() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full"
      data-name="Buttons"
    >
      <Button
        variant="primary"
        label="Ceritakan Kebutuhanmu"
        to="/forms"
      />

      <Button
        variant="secondary"
        label="Tentang FLIK"
        to="/tentang-flik"
      />
    </div>
  );
}

function HeroDescriptionContainer() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[500px]"
      data-name="Hero description container"
    >
      <p className="leading-[1.6] not-italic relative shrink-0 text-[#111928] text-[18px] tracking-[-0.2px] w-full whitespace-pre-wrap" 
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}>
        Membantu bisnis untuk tetap memiliki ruang untuk
        bergerak dan beradaptasi di tengah berbagai kebutuhan
        operasional.
      </p>
      <Buttons />
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px min-w-px relative"
      data-name="Content"
    >
      <div className="capitalize leading-[1.4] not-italic relative shrink-0 text-[#111928] text-[40px] tracking-[-1px] w-[540px] whitespace-pre-wrap"
      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}>
        <p className="mb-0">
          {`Menjaga momentum, `}
          <br aria-hidden="true" />
          {`& memberi ruang`}
        </p>
        <p>Untuk bergerak.</p>
      </div>
      <HeroDescriptionContainer />
    </div>
  );
}

function Hero() {
  return (
    <div
      className="content-stretch flex items-center justify-end relative shrink-0 w-[1080px]"
      data-name="Hero"
    >
      <Content />
    </div>
  );
}

function ArrowCircleRight() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="ArrowCircleRight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.p332c6b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContentDescriptionContainer() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Content description container"
    >
      <p className="leading-[1.25] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.96px] w-full whitespace-pre-wrap"
      style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 500}}>
        Mendukung pembukaan 30+ cabang EMADO’S di seluruh
        Indonesia dengan operasional yang tetap terkendali.
      </p>
    </div>
  );
}

function Text() {
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="Text"
    >
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <ArrowCircleRight />
        <ContentDescriptionContainer />
      </div>
    </div>
  );
}

function ContentImage() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] h-[500px] items-end justify-end min-h-px min-w-px overflow-hidden relative group cursor-pointer"
      data-name="Content image"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={imgContentImage}
        />
        <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
      </div>
      <Text />
    </div>
  );
}

function ArrowCircleRight1() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="ArrowCircleRight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.p332c6b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContentDescriptionContainer1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Content description container"
    >
      <p className="leading-[1.25] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.96px] w-full whitespace-pre-wrap"
      style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 500}}>
        Mendukung persediaan stok HEYLOCAL untuk melayani
        500.000+ transaksi saat peak season.
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="Text"
    >
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <ArrowCircleRight1 />
        <ContentDescriptionContainer1 />
      </div>
    </div>
  );
}

function ContentImage1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] h-[500px] items-end justify-end min-h-px min-w-px overflow-hidden relative group cursor-pointer"
      data-name="Content image"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <img
          alt=""
          className="absolute max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={imgContentImage1}
        />
        <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
      </div>
      <Text1 />
    </div>
  );
}

function ContentRow() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
      data-name="Content row"
    >
      <ContentImage />
      <ContentImage1 />
    </div>
  );
}

function ArrowCircleRight2() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="ArrowCircleRight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.p332c6b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ContentDescriptionContainer2() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Content description container"
    >
      <p className="leading-[1.25] not-italic relative shrink-0 text-[30px] text-white tracking-[-0.96px] w-full whitespace-pre-wrap"
      style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 500}}>
        Menjaga stok ERIGO sehingga dapat mendorong penjualan
        hingga 200% di online dan offline store.
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="Text"
    >
      <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
        <ArrowCircleRight2 />
        <ContentDescriptionContainer2 />
      </div>
    </div>
  );
}

function ContentImage2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] h-[500px] items-end justify-end min-h-px min-w-px overflow-hidden relative group cursor-pointer"
      data-name="Content image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        src={imgContentImage2}
      />
      <Text2 />
    </div>
  );
}

function ArrowCircleRight3() {
  return (
    <div
      className="relative shrink-0 size-[48px]"
      data-name="ArrowCircleRight"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.p332c6b00}
            fill="var(--fill-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="Card-Purple"
    >
      <div className="content-stretch flex flex-col items-start justify-between p-[60px] relative size-full p-[40px] cursor-pointer transition-colors duration-300 hover:bg-[#4A1280]">
        <ArrowCircleRight3 />
        <p className="leading-[1.25] min-w-full not-italic relative shrink-0 text-[30px] text-white tracking-[-0.5px] w-[min-content] whitespace-pre-wrap"
        style={{fontFamily: "'Satoshi', sans-serif", fontWeight: 500}}>
          Lihat cerita merchant
          <br aria-hidden="true" />
          lainnya, disini.
        </p>
      </div>
    </div>
  );
}

function ContentImage3() {
  return (
    <div
      className="bg-[#701bc1] content-stretch flex flex-[1_0_0] h-[500px] items-end justify-end min-h-px min-w-px relative"
      data-name="Content image"
    >
      <Text3 />
    </div>
  );
}

function ContentRow1() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
      data-name="Content row"
    >
      <ContentImage2 />
      <ContentImage3 />
    </div>
  );
}

function ContentSection() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1080px]"
      data-name="Content section"
    >
      <ContentRow />
      <ContentRow1 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="content-stretch flex flex-col gap-[100px] items-center px-[0px] py-[100px] relative shrink-0 w-full"
      data-name="Body"
    >
      <Hero />
      <ContentSection />
      <CTASection
        title={"Ketika bisnis,\nMembutuhkan\nRuang Lebih."}
        description={
          "Jelaskan dengan detail mengenai kebutuhan bisnismu agar ruang gerak dan fleksibilitas dalam operasional tetap terjaga dengan baik."
        }
        buttonLabel="Hubungi Kami"
        buttonTo="/forms"
      />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Landing Page"
    >
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}