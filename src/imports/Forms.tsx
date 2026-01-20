import imgLogoFlik023 from "figma:asset/aed87940c9dfb4bdec8cd0c8f90ba0aa5330fdad.png";

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
      <p className="css-ew64yg font-w400 leading-[1.5] not-italic relative shrink-0 text-[#111928] text-[18px]">Merchant Kami</p>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Nav">
      <p className="css-ew64yg font-w400 leading-[1.5] not-italic relative shrink-0 text-[#111928] text-[18px]">Tentang FLIK</p>
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
      <p className="css-ew64yg font-w400 leading-[1.5] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px]">Ceritakan Kebutuhanmu</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center max-w-[1080px] min-h-px min-w-px relative" data-name="Container">
      <Logo />
      <Navs />
      <Button />
    </div>
  );
}

function Navbar() {
  return (
    <div className="content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-full" data-name="Navbar">
      <Container />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end justify-between not-italic relative shrink-0 text-[#111928] w-full" data-name="Title">
      <p className="capitalize css-4hzbpn font-w400 leading-[1.2] relative shrink-0 text-[40px] tracking-[-1px] w-[500px]">
        {`Dimulai `}
        <br aria-hidden="true" />
        dari Obrolan
      </p>
      <p className="css-4hzbpn font-w400 leading-[1.5] relative shrink-0 text-[20px] w-[430px]">Setiap perjalanan bisnis dimulai dari percakapan yang tepat. Ceritakan kebutuhan, tantangan, atau rencanamu, kami siap mendengarkan.</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1080px] relative shrink-0 w-full" data-name="Hero">
      <Title />
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Masukkan nama lengkap kamu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field />
      <div className="flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Contoh: Reynald Daffa Pahlevi</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Nama Lengkap</p>
      </div>
      <Container1 />
    </div>
  );
}

function Field1() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Masukkan nama bisnis kamu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field1 />
      <div className="flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Contoh: Bebek Goreng H. Guti</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Nama Bisnis</p>
      </div>
      <Container2 />
    </div>
  );
}

function Field2() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Website bisnis atau akun Instagram bisnis kamu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field2 />
      <div className="css-g0mm18 flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[1.5]">Contoh: https://bebekhguti.id atau @bebek.h.guti</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Instagram Bisnis / Link Website</p>
      </div>
      <Container3 />
    </div>
  );
}

function Field3() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Masukin nomor telepon (whatsapp)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field3 />
      <div className="css-g0mm18 flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[1.5]">Contoh: 0812345678910</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Nomor Telepon</p>
      </div>
      <Container4 />
    </div>
  );
}

function Field4() {
  return (
    <div className="bg-white h-[48px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[12px] py-[16px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
            <p className="css-4hzbpn leading-[1.5]">Masukin nama dan nama usaha nya ya (jika ada).</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field4 />
      <div className="css-g0mm18 flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[1.5]">Contoh: Hernandez (JOKOPI)</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Kamu Tau FLIK dari Siapa?</p>
      </div>
      <Container5 />
    </div>
  );
}

function Field5() {
  return (
    <div className="bg-white h-[200px] relative rounded-[6px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <div className="flex flex-[1_0_0] flex-col font-w400 justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#6b7280] text-[16px]">
          <p className="css-4hzbpn leading-[1.5]">Jelasin secara singkat apa yang bisa FLIK bantu untuk kamu.</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Field5 />
      <div className="css-g0mm18 flex flex-col font-w400 justify-end leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px]">
        <p className="css-ew64yg leading-[1.5]">Maksimal adalah 30 - 1000 karakter.</p>
      </div>
    </div>
  );
}

function InputFieldStandardDefault5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field / Standard / Default">
      <div className="flex flex-col font-w500 justify-end leading-[0] not-italic relative shrink-0 text-[#111928] text-[16px] tracking-[-0.096px] w-full">
        <p className="css-4hzbpn leading-[1.5]">Kamu Ingin FLIK Bantu Apa?</p>
      </div>
      <Container6 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#701bc1] content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[200px]" data-name="Button">
      <p className="css-ew64yg font-w500 leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">Kirim ke FLIK →</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white max-w-[1080px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-end justify-center max-w-[inherit] p-[40px] relative w-full">
          <InputFieldStandardDefault />
          <InputFieldStandardDefault1 />
          <InputFieldStandardDefault2 />
          <InputFieldStandardDefault3 />
          <InputFieldStandardDefault4 />
          <InputFieldStandardDefault5 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center px-0 py-[40px] relative shrink-0 w-full" data-name="Form">
      <Container7 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center pb-0 pt-[60px] px-0 relative shrink-0 w-full" data-name="Body">
      <Hero />
      <Form />
    </div>
  );
}

function Links() {
  return (
    <div className="capitalize content-stretch flex flex-[1_0_0] font-w400 gap-[16px] items-center justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#111928] text-[16px] tracking-[-0.096px]" data-name="Links">
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[24px] underline">{`Syarat & Ketentuan`}</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[24px] underline">kebijakan privasi</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-end relative shrink-0">
        <p className="css-ew64yg decoration-solid leading-[24px] underline">FAQs</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-end justify-between max-w-[1080px] relative shrink-0 w-[1080px]" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-w400 justify-end leading-[0] min-h-px min-w-px not-italic relative text-[#111928] text-[16px] tracking-[-0.096px]">
        <p className="css-4hzbpn leading-[1.5]">© Copyright 2026 All Rights Reserved by FLIK</p>
      </div>
      <div className="h-[23px] relative shrink-0 w-[64px]" data-name="Logo FLIK-02 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoFlik023} />
      </div>
      <Links />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end justify-between px-[80px] py-[40px] relative w-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

export default function Forms() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Forms">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}