import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CTASection from "../../components/cta-section";

import svgPaths from "../../../imports/svg-q92kolgqwo";
import imgImage8 from "../../../assets/TentangFLIK-02.png";
import imgImage9 from "../../../assets/TentangFLIK-03.png";
import imgImage7 from "../../../assets/TentangFLIK-01.png";
import imgMcaPageHeroSection1 from "../../../assets/TentangFLIK-04.png";

function Title() {
  return (
    <div
      className="content-stretch flex gap-[60px] items-end max-w-[1080px] not-italic relative shrink-0 text-[#111928] w-full whitespace-pre-wrap"
      data-name="Title"
    >
      <p
        className="capitalize font-['Satoshi:Medium',sans-serif] leading-[1.4] relative shrink-0 text-[40px] tracking-[-1px] w-[540px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      >
        {`Melalui Pendekatan `}
        <br aria-hidden="true" />
        yang Lebih Tenang
      </p>
      <p
        className="flex-[1_0_0] font-['Satoshi:Regular',sans-serif] leading-[1.5] min-h-px min-w-px relative text-[18px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Berangkat dari pemahaman bahwa bisnis tidak selalu stabil, dan keputusan
        terbaik perlu diambil dengan kepastian dan penuh atas kendali.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start justify-center min-h-px min-w-px relative">
      <div
        className="flex-[1_0_0] min-h-px min-w-px relative w-full"
        data-name="image 8"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[227.36%] left-[0.03%] max-w-none top-[-60.21%] w-full"
            src={imgImage8}
          />
        </div>
      </div>
      <div
        key={Date.now()}
        className="flex-[1_0_0] min-h-[300px] min-w-px relative w-full bg-[rgb(255,255,255)]"
        data-name="image 9"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-0 max-w-none object-cover top-0 w-full"
            src={imgImage9}
          />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] h-[640px] items-start relative shrink-0 w-full">
      <div
        className="flex-[1_0_0] h-full min-h-px min-w-px relative"
        data-name="image 7"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage7}
        />
      </div>
      <Frame1 />
    </div>
  );
}

function Title1() {
  return (
    <div
      className="content-stretch flex items-end relative shrink-0 w-full"
      data-name="Title"
    >
      <p
        className="flex-[1_0_0] leading-[1.7] min-h-px min-w-px not-italic relative text-[#111928] text-[18px] whitespace-pre-wrap text-justify"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        FLIK dibangun dari pemahaman mendalam bahwa perjalanan bisnis sering
        kali tidak berjalan lurus dan stabil. Dalam dunia yang dinamis ini,
        terdapat fase-fase ketika operasional memerlukan perhatian lebih,
        keputusan harus diambil dengan cepat dan tepat, serta ruang gerak
        menjadi semakin penting untuk kelangsungan usaha. Dalam kondisi seperti
        ini, banyak bisnis tidak memerlukan perubahan besar atau solusi yang
        memaksa, melainkan pendekatan yang lebih tenang dan relevan dengan ritme
        yang sedang dijalani. Pendekatan FLIK berangkat dari cara kerja bisnis
        yang sudah ada, dengan tujuan untuk menyesuaikan diri dengan konteks
        masing-masing usaha. Kami memahami bahwa kebutuhan bisnis dapat naik dan
        turun seiring berjalannya waktu, dan kami siap untuk beradaptasi dengan
        perubahan tersebut. Fokus kami adalah membantu bisnis menjaga momentum
        yang telah dibangun, tetap memiliki fleksibilitas dalam mengelola
        kebutuhan operasional, serta mengambil keputusan yang tepat tanpa
        kehilangan kendali atau menambah beban yang tidak perlu. Dengan FLIK,
        kami berkomitmen untuk menjadi mitra yang dapat diandalkan dalam setiap
        langkah perjalanan bisnis Anda.
      </p>
    </div>
  );
}

function Description() {
  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start max-w-[1080px] relative shrink-0 w-full"
      data-name="Description"
    >
      <Frame />
      <Title1 />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CheckCircle">
          <path
            d={svgPaths.p41b8c00}
            fill="var(--fill-0, #701BC1)"
            id="Vector"
            opacity="0.2"
          />
          <path
            d={svgPaths.p320cb280}
            fill="var(--fill-0, #701BC1)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Point() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
      data-name="Point"
    >
      <CheckCircle />
      <p
        className="flex-[1_0_0] leading-[1.6] min-h-px min-w-px not-italic relative text-[#111928] text-[18px] whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Fokus ke bisnis dengan operasional yang sudah autopilot.
      </p>
    </div>
  );
}

function CheckCircle1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CheckCircle">
          <path
            d={svgPaths.p41b8c00}
            fill="var(--fill-0, #701BC1)"
            id="Vector"
            opacity="0.2"
          />
          <path
            d={svgPaths.p320cb280}
            fill="var(--fill-0, #701BC1)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Point1() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
      data-name="Point"
    >
      <CheckCircle1 />
      <p
        className="flex-[1_0_0] leading-[1.6] min-h-px min-w-px not-italic relative text-[#111928] text-[18px] whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Tanpa perubahan atau pengurangan kepemilikan saham.
      </p>
    </div>
  );
}

function CheckCircle2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CheckCircle">
          <path
            d={svgPaths.p41b8c00}
            fill="var(--fill-0, #701BC1)"
            id="Vector"
            opacity="0.2"
          />
          <path
            d={svgPaths.p320cb280}
            fill="var(--fill-0, #701BC1)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Point2() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
      data-name="Point"
    >
      <CheckCircle2 />
      <p
        className="flex-[1_0_0] leading-[1.6] min-h-px min-w-px not-italic relative text-[#111928] text-[18px] whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Tanpa bunga atau biaya tersembunyi.
      </p>
    </div>
  );
}

function CheckCircle3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CheckCircle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="CheckCircle">
          <path
            d={svgPaths.p41b8c00}
            fill="var(--fill-0, #701BC1)"
            id="Vector"
            opacity="0.2"
          />
          <path
            d={svgPaths.p320cb280}
            fill="var(--fill-0, #701BC1)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Point3() {
  return (
    <div
      className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full"
      data-name="Point"
    >
      <CheckCircle3 />
      <p
        className="flex-[1_0_0] leading-[1.6] min-h-px min-w-px not-italic relative text-[#111928] text-[18px] whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Menyesuaikan kondisi cashflow yang naik dan turun.
      </p>
    </div>
  );
}

function Points() {
  return (
    <div
      className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full"
      data-name="Points"
    >
      <Point />
      <Point1 />
      <Point2 />
      <Point3 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative"
      data-name="Content"
    >
      <p
        className="capitalize leading-[1.4] not-italic relative shrink-0 text-[#111928] text-[40px] tracking-[-1px] w-full whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      >
        {`bertumbuh tanpa `}
        <br aria-hidden="true" />
        kehilangan kendali
      </p>
      <p
        className="leading-[1.6] not-italic relative shrink-0 text-[#111928] text-[18px] w-full whitespace-pre-wrap"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        Dirancang untuk menjaga ritme, keputusan, dan arus tetap seimbang saat
        kebutuhan dan peluang terus bertambah.
      </p>
      <Points />
    </div>
  );
}

function Section() {
  return (
    <div
      className="bg-white content-stretch flex gap-[60px] items-center justify-center max-w-[1080px] relative shrink-0 w-full"
      data-name="Section"
    >
      <div
        className="relative shrink-0 size-[450px]"
        data-name="MCA-PAGE-Hero-Section 1"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-[179.17%] left-0 max-w-none top-[-47.44%] w-full"
            src={imgMcaPageHeroSection1}
          />
        </div>
      </div>
      <Content />
    </div>
  );
}

function Container1() {
  return (
    <div
      className="content-stretch flex flex-col gap-[100px] items-start max-w-[1080px] relative shrink-0"
      data-name="Container"
    >
      <Title />
      <Description />
      <Section />
      <CTASection
        title={"Ruang gerak, \ntidak selalu sama."}
        description={
          "Ceritakan dengan detail, bagaimana ritme dan kebutuhan operasional bisnismu saat ini."
        }
        buttonLabel="Hubungi Kami"
        buttonTo="/forms"
      />
    </div>
  );
}

function Body() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center px-0 py-[100px] relative shrink-0 w-full"
      data-name="Body"
    >
      <Container1 />
    </div>
  );
}

export default function AboutPage() {
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Tentang FLIK"
    >
      <Body />
    </div>
  );
}
