import imgLogoFlik023 from "figma:asset/aed87940c9dfb4bdec8cd0c8f90ba0aa5330fdad.png";
import imgImage from "figma:asset/d7f3085e0448b1a5787f83720c6b0875454387e6.png";

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="Logo">
      <div className="h-[32px] relative shrink-0 w-[89px]" data-name="Logo FLIK-02 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFlik023} />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Nav">
      <p className="css-ew64yg decoration-solid font-['Satoshi:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#701bc1] text-[18px] underline">Merchant Kami</p>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Nav">
      <p className="css-ew64yg font-['Satoshi:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#111928] text-[18px]">Tentang FLIK</p>
    </div>
  );
}

function Navs() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[36px] items-center justify-center min-h-px min-w-px relative" data-name="Navs">
      <Nav />
      <Nav1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#701bc1] content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[200px]" data-name="Button">
      <p className="css-ew64yg font-['Satoshi:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">Ngobrol Bareng Yuk</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navbar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[100px] py-[24px] relative w-full">
          <Logo />
          <Navs />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end justify-between not-italic relative shrink-0 text-[#111928] w-full" data-name="Title">
      <p className="capitalize css-4hzbpn flex-[1_0_0] font-['Satoshi:Medium',sans-serif] leading-[1.2] min-h-px min-w-px relative text-[64px] tracking-[-1px]">EMADO’S SHAWARMA</p>
      <p className="[text-decoration-skip-ink:none] css-ew64yg decoration-solid font-['Satoshi:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] tracking-[1px] underline">linktr.ee/emados</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f3f4f6] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center p-[40px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div className="bg-[#111928] h-full shrink-0 w-[8px]" data-name="Divider" />
          </div>
          <p className="css-4hzbpn flex-[1_0_0] font-['Satoshi:Medium',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#111928] text-[28px] tracking-[-0.56px]">Mendukung pembukaan 30+ cabang EMADO’S di seluruh Indonesia dengan operasional yang tetap terkendali.</p>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Title">
      <div className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[1.7] min-h-px min-w-px not-italic relative text-[#111928] text-[20px]">
        <p className="css-4hzbpn mb-[25px]">Pembukaan lebih dari 30 cabang EMADO’S di berbagai wilayah Indonesia adalah langkah signifikan dalam fase pertumbuhan yang menuntut kesiapan di banyak sisi sekaligus. Setiap lokasi baru tidak hanya menghadirkan tantangan, tetapi juga kebutuhan operasional yang berbeda-beda. Ini mencakup pengadaan bahan baku yang berkualitas, kesiapan dapur dan tim yang terlatih, serta memastikan bahwa standar kualitas tetap konsisten di seluruh cabang yang baru dibuka. Dalam fase ini, tantangan utama bukan hanya sekadar membuka cabang baru, tetapi juga memastikan bahwa seluruh operasional tetap berjalan dengan rapi dan terkontrol.</p>
        <p className="css-4hzbpn">Seiring dengan bertambahnya jumlah cabang, kompleksitas operasional yang dihadapi juga meningkat secara signifikan. EMADO’S perlu menjaga keseimbangan yang tepat antara ekspansi yang agresif dan stabilitas operasional, agar proses yang sudah berjalan tidak terganggu oleh skala yang terus bertambah. Dengan pendekatan yang terstruktur dan fleksibel terhadap kebutuhan di lapangan, EMADO’S dapat melanjutkan ekspansi ke lebih banyak lokasi strategis di seluruh Indonesia, sambil tetap menjaga kendali operasional yang ketat di setiap fase pertumbuhan yang dilalui. Hal ini penting untuk memastikan bahwa setiap cabang dapat beroperasi secara optimal dan memberikan pengalaman terbaik bagi pelanggan.</p>
      </div>
    </div>
  );
}

function Detail() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1080px] relative shrink-0 w-full" data-name="Detail">
      <Title />
      <Container />
      <div className="h-[604px] relative shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Title1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex gap-[80px] items-start not-italic relative shrink-0 text-[#111928] w-[960px]" data-name="Text">
      <div className="capitalize font-['Satoshi:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[40px] tracking-[-1px] w-[480px]">
        <p className="css-4hzbpn mb-0">{`Tidak semuanya `}</p>
        <p className="css-4hzbpn">harus sendiri.</p>
      </div>
      <p className="css-4hzbpn flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[1.5] min-h-px min-w-px relative text-[20px]">
        {`Setiap momen punya tantangan nya. `}
        <br aria-hidden="true" />
        FLIK siap menemani langkah bisnismu di momen berikutnya.
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#701bc1] content-stretch flex h-[70px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[250px]" data-name="Button">
      <p className="css-ew64yg font-['Satoshi:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.18px]">Hubungi Kami</p>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col gap-[60px] items-start justify-center max-w-[1080px] p-[60px] relative rounded-[20px] shrink-0 w-[1080px]" data-name="CTA">
      <Text />
      <Button1 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[100px] items-center justify-center px-0 py-[60px] relative shrink-0 w-full" data-name="Body">
      <Detail />
      <Cta />
    </div>
  );
}

function Container1() {
  return (
    <div className="capitalize content-stretch flex font-['Satoshi:Regular',sans-serif] gap-[16px] items-center justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[14px] tracking-[-0.084px] w-[321px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[20px] underline">{`Syarat & Ketentuan`}</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[20px] underline">kebijakan privasi</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[20px] underline">FAQs</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[80px] py-[40px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Satoshi:Regular',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px]">
            <p className="css-ew64yg leading-[1.5]">© Copyright 2026 All Rights Reserved by FLIK</p>
          </div>
          <div className="h-[23px] relative shrink-0 w-[64px]" data-name="Logo FLIK-02 3">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFlik023} />
          </div>
          <Container1 />
        </div>
      </div>
    </div>
  );
}

export default function Emados() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" data-name="Emado\'s">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}