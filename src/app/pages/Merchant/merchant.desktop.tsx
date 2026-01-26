import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CTAButton from "../../components/flik-button";

import { Link } from "react-router-dom";
import svgPaths from "../../../imports/svg-x9wdmk33ce";

import imageEmados from "../../../assets/ImageThumbnailEmados.png";
import imageHeylocal from "../../../assets/ImageThumbnailHeylocal.png";
import imageErigo from "../../../assets/ImageThumbnailErigo.png";
import imageBegor from "../../../assets/ImageThumbnailBegor.png";
import imageJokopi from "../../../assets/ImageThumbnailJokopi.png";

function Title() {
  return (
    <div
      className="content-stretch flex items-end justify-between not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p
        className="capitalize leading-[1.4] relative shrink-0 text-[40px] tracking-[-1px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      >
        Cerita di Balik <br></br>Pertumbuhan
      </p>
      <p
        className="leading-[1.5] relative shrink-0 text-[18px] w-[480px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Pertumbuhan tidak hanya tentang angka, tetapi juga keputusan dan
        operasional yang harus tetap terkendali. Semua dijalani bersama dengan
        FLIK.
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-center max-w-[1080px] relative shrink-0 w-full"
      data-name="Hero"
    >
      <Title />
    </div>
  );
}

function Image() {
  return (
    <div
      className="h-[520px] relative shrink-0 w-full overflow-hidden"
      data-name="Image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        src={imageEmados}
      />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p className="font-w500 leading-[1.35] relative shrink-0 text-[28px] w-full transition-colors duration-300 group-hover:text-[#701bc1]">
        EMADO'S SHAWARMA
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-full">
        Mendukung pembukaan 30+ cabang EMADO'S di seluruh Indonesia dengan
        operasional yang tetap terkendali.
      </p>
    </div>
  );
}

function ArrowCircleRight() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="ArrowCircleRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.pfd58040}
            fill="var(--fill-0, #111928)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
        <Title1 />
        <ArrowCircleRight />
      </div>
    </div>
  );
}

function Merchant() {
  return (
    <Link
      to="/merchant/emados"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tl-[40px] rounded-tr-[40px] group cursor-pointer"
      data-name="Merchant"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />
      <Image />
      <Text />
    </Link>
  );
}

function Image1() {
  return (
    <div
      className="content-stretch flex items-end justify-end relative shrink-0 w-full overflow-hidden"
      data-name="Image"
    >
      <div
        className="flex-[1_0_0] h-[520px] min-h-px min-w-px relative overflow-hidden"
        data-name="image 9"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={imageErigo}
        />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p className="font-w500 leading-[1.35] relative shrink-0 text-[28px] w-full transition-colors duration-300 group-hover:text-[#701bc1]">
        ERIGO Apparel
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-full">
        Menjaga stok ERIGO sehingga dapat mendorong penjualan hingga 200% di
        e-commerce dan offline store.
      </p>
    </div>
  );
}

function ArrowCircleRight1() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="ArrowCircleRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.pfd58040}
            fill="var(--fill-0, #111928)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
        <Title2 />
        <ArrowCircleRight1 />
      </div>
    </div>
  );
}

function Merchant1() {
  return (
    <Link
      to="/merchant/erigo"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tl-[40px] rounded-tr-[40px] group cursor-pointer"
      data-name="Merchant"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />
      <Image1 />
      <Text1 />
    </Link>
  );
}

function Row() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Merchant />
      <Merchant1 />
    </div>
  );
}

function Image2() {
  return (
    <div
      className="h-[520px] relative shrink-0 w-full overflow-hidden"
      data-name="Image"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute h-[151.44%] left-[-13.51%] max-w-none top-[-22.07%] w-[113.58%] transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={imageHeylocal}
        />
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#111928] w-full"
      data-name="Title"
    >
      <p className="font-w500 leading-[1.35] relative shrink-0 text-[28px] uppercase whitespace-pre transition-colors duration-300 group-hover:text-[#701bc1]">
        Heylocal.id
      </p>
      <p className="font-w400 leading-[1.5] min-w-full relative shrink-0 text-[18px] w-[min-content] whitespace-pre-wrap">
        Mendukung persediaan stok HEYLOCAL untuk mendukung kelancaran 500.000+
        transaksi saat peak season.
      </p>
    </div>
  );
}

function ArrowCircleRight2() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="ArrowCircleRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.pfd58040}
            fill="var(--fill-0, #111928)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
        <Title3 />
        <ArrowCircleRight2 />
      </div>
    </div>
  );
}

function Merchant2() {
  return (
    <Link
      to="/merchant/heylocal"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tl-[40px] rounded-tr-[40px] group cursor-pointer"
      data-name="Merchant"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />
      <Image2 />
      <Text2 />
    </Link>
  );
}

function Image3() {
  return (
    <div
      className="h-[520px] relative shrink-0 w-full overflow-hidden"
      data-name="Image"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover size-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        src={imageBegor}
      />
    </div>
  );
}

function Title4() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p className="font-w500 leading-[1.35] relative shrink-0 text-[28px] w-full transition-colors duration-300 group-hover:text-[#701bc1]">
        Bebek Goreng Pondok Suryo
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-full">
        Mendukung Pondok Suryo menjaga stok bebek premium dan mengoptimalkan
        anggaran pemasaran hingga 40%.
      </p>
    </div>
  );
}

function ArrowCircleRight3() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="ArrowCircleRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.pfd58040}
            fill="var(--fill-0, #111928)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
        <Title4 />
        <ArrowCircleRight3 />
      </div>
    </div>
  );
}

function Merchant3() {
  return (
    <Link
      to="/merchant/begor-pondok-suryo"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tl-[40px] rounded-tr-[40px] group cursor-pointer"
      data-name="Merchant"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />
      <Image3 />
      <Text3 />
    </Link>
  );
}

function Row1() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Merchant2 />
      <Merchant3 />
    </div>
  );
}

function Image4() {
  return (
    <div
      className="content-stretch flex items-end justify-end relative shrink-0 w-full overflow-hidden"
      data-name="Image"
    >
      <div
        className="flex-[1_0_0] h-[520px] min-h-px min-w-px relative overflow-hidden"
        data-name="image 9"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute h-[143.6%] left-[-17.73%] max-w-none top-[-21.83%] w-[135.47%] transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={imageJokopi}
          />
        </div>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p className="font-w500 leading-[1.35] relative shrink-0 text-[28px] w-full transition-colors duration-300 group-hover:text-[#701bc1]">
        Jokopi
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-full">
        Mendukung Jokopi ekspansi di 3 cabang baru dengan tetap menjaga pasokan
        bahan baku dan operasional.
      </p>
    </div>
  );
}

function ArrowCircleRight4() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="ArrowCircleRight">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 36 36"
      >
        <g id="ArrowCircleRight">
          <path
            d={svgPaths.pfd58040}
            fill="var(--fill-0, #111928)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[40px] relative w-full">
        <Title5 />
        <ArrowCircleRight4 />
      </div>
    </div>
  );
}

function Merchant4() {
  return (
    <Link
      to="/merchant/jokopi"
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative rounded-tl-[40px] rounded-tr-[40px] group cursor-pointer"
      data-name="Merchant"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-tl-[40px] rounded-tr-[40px]"
      />
      <Image4 />
      <Text4 />
    </Link>
  );
}

function Text5() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Text"
    >
      <p className="capitalize font-w500 leading-[1.4] relative shrink-0 text-[40px] tracking-[-1px] w-full">
        {`Setiap Bisnis, `}
        <br aria-hidden="true" />
        {`Punya Cerita `}
        <br aria-hidden="true" />
        Uniknya.
      </p>
      <p className="font-w400 leading-[1.5] relative shrink-0 text-[18px] w-full">
        Dan setiap cerita butuh partner yang tepat untuk berbagi dan bertukar
        pengalaman.
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#701bc1] h-[80px] relative rounded-[10px] shrink-0 w-full cursor-pointer transition-colors duration-300 hover:bg-[#4A1280]"
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
          <p className="font-w500 leading-[1.5] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-pre">
            Hubungi Kami
          </p>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div
      className="bg-[#f3f4f6] flex-[1_0_0] h-full min-h-px min-w-px relative"
      data-name="CTA"
    >
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start justify-end p-[60px] relative size-full">
          <Text5 />
          <div className="h-[80px]">
            <CTAButton
              variant="primary"
              label="Ceritakan Kebutuhanmu"
              to="/forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div
      className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full"
      data-name="Row"
    >
      <Merchant4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Cta />
      </div>
    </div>
  );
}

function Merchants() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start max-w-[1080px] relative shrink-0 w-full"
      data-name="Merchants"
    >
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Body() {
  return (
    <div
      className="content-stretch flex flex-col gap-[100px] items-center justify-center px-[0px] py-[100px] relative shrink-0 w-full"
      data-name="Body"
    >
      <Hero />
      <Merchants />
    </div>
  );
}

export default function MerchantKami() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Merchant Kami"
    >
      <Body />
    </div>
  );
}
