import CTASection from "../../components/cta-section";

import svgPaths from "../../../imports/svg-q92kolgqwo";
import image from "../../../assets/TentangFLIK-04.png";

import "../../../styles/mobile.css";

const HeroSection = () => {
  return (
    <div className={"hero-about pb-[40px]"}>
      <div className={"melaluiPendekatanYang"}>
        Melalui Pendekatan <br />
        yang Lebih Tenang
      </div>
      <div className={"berangkatDariPemahaman"}>
        Berangkat dari pemahaman bahwa bisnis tidak selalu stabil, dan keputusan
        terbaik perlu diambil dengan kepastian dan kendali.
      </div>
    </div>
  );
};

const FLIKStorySection = () => {
  return (
    <div className={"description-about pb-[40px]"}>
      <div className={"images-about"}>
        <img className={"image-tentang-FLIK-1"} alt="" />
        <img className={"image-tentang-FLIK-2"} alt="" />
        <img className={"image-tentang-FLIK-3"} alt="" />
      </div>
      <div className={"description-about-text"}>
        <div className={"flikDibangunDari"}>
          FLIK dibangun dari pemahaman mendalam bahwa perjalanan bisnis sering
          kali tidak berjalan lurus dan stabil. Dalam dunia yang dinamis ini,
          terdapat fase-fase ketika operasional memerlukan perhatian lebih,
          keputusan harus diambil dengan cepat dan tepat, serta ruang gerak
          menjadi semakin penting untuk kelangsungan usaha. Dalam kondisi
          seperti ini, banyak bisnis tidak memerlukan perubahan besar atau
          solusi yang memaksa, melainkan pendekatan yang lebih tenang dan
          relevan dengan ritme yang sedang dijalani. Pendekatan FLIK berangkat
          dari cara kerja bisnis yang sudah ada, dengan tujuan untuk
          menyesuaikan diri dengan konteks masing-masing usaha. Kami memahami
          bahwa kebutuhan bisnis dapat naik dan turun seiring berjalannya waktu,
          dan kami siap untuk beradaptasi dengan perubahan tersebut. Fokus kami
          adalah membantu bisnis menjaga momentum yang telah dibangun, tetap
          memiliki fleksibilitas dalam mengelola kebutuhan operasional, serta
          mengambil keputusan yang tepat tanpa kehilangan kendali atau menambah
          beban yang tidak perlu. Dengan FLIK, kami berkomitmen untuk menjadi
          mitra yang dapat diandalkan dalam setiap langkah perjalanan bisnis
          Anda.
        </div>
      </div>
    </div>
  );
};

const FLIKKeyPoints = () => {
  function CircleIconSVG() {
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
  return (
    <div className={"FLIK-key-points-section pb-[40px]"}>
      <img className={"mcaPageHeroSection1Icon"} alt="" src={image} />
      <div className={"content-FLIK-key-points"}>
        <p className={"FLIK-key-points-title"}>
          bertumbuh tanpa <br />
          kehilangan kendali
        </p>
        <div className={"dirancangUntukMenjaga text-[16px]"}>
          Dirancang untuk menjaga ritme, keputusan, dan arus tetap seimbang saat
          kebutuhan dan peluang terus bertambah.
        </div>
        <div className={"content"}>
          <div className={"point"}>
            <CircleIconSVG />
            <div className={"text-[16px] font-w400"}>
              Fokus ke bisnis dengan operasional yang sudah autopilot.
            </div>
          </div>
          <div className={"point"}>
            <CircleIconSVG />
            <p className={"text-[16px] font-w400"}>
              Tanpa perubahan atau pengurangan kepemilikan saham.
            </p>
          </div>
          <div className={"point"}>
            <CircleIconSVG />
            <div className={"text-[16px] font-w400"}>
              Tanpa bunga atau biaya tersembunyi.
            </div>
          </div>
          <div className={"point"}>
            <CircleIconSVG />
            <div className={"text-[16px] font-w400"}>
              Menyesuaikan kondisi cashflow yang naik dan turun.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="px-[20px] py-[40px]">
      <HeroSection></HeroSection>
      <FLIKStorySection></FLIKStorySection>
      <FLIKKeyPoints></FLIKKeyPoints>
      <CTASection
        title={"Ruang gerak, \ntidak selalu sama."}
        description="Ceritakan dengan detail, bagaimana ritme dan kebutuhan operasional bisnismu saat ini."
        buttonLabel="Ngobrol Bareng, Yuk"
        buttonTo="/forms"
      ></CTASection>
    </div>
  );
};

export default AboutPage;
