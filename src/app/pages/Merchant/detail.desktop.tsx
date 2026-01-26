import { useParams, useNavigate, Link } from "react-router-dom";
import { merchantStories, MerchantStory } from "./merchantStories";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CTASection from "../../components/cta-section";

// Detail images for each merchant
import imgEmadosDetail from "../../../assets/ImageDetailEmados.png";
import imgErigoDetail from "../../../assets/ImageDetailErigo.png";
import imgHeylocalDetail from "../../../assets/ImageDetailHeylocal.png";
import imgBebekDetail from "../../../assets/ImageDetailBegor.png";
import imgJokopiDetail from "../../../assets/ImageDetailJokopi.png";

// Map of merchant slugs to their detail images
const merchantDetailImages: Record<string, string> = {
  emados: imgEmadosDetail,
  erigo: imgErigoDetail,
  heylocal: imgHeylocalDetail,
  "begor-pondok-suryo": imgBebekDetail,
  jokopi: imgJokopiDetail,
};

function Title({ merchant }: { merchant: MerchantStory }) {
  return (
    <div
      className="content-stretch flex items-end justify-between not-italic relative shrink-0 text-[#111928] w-full"
      data-name="Title"
    >
      <p
        className="capitalize flex-[1_0_0] leading-[1.2] min-h-px min-w-px relative text-[48px] tracking-[-1px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
      >
        {merchant.name}
      </p>
      {merchant.websiteUrl && (
        <a
          href={`https://${merchant.websiteUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="decoration-solid leading-[1.5] relative shrink-0 text-[16px] tracking-[1px] underline text-[#111928] hover:text-[#701bc1] transition-colors duration-300"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
        >
          {merchant.websiteUrl}
        </a>
      )}
    </div>
  );
}

function HeadlineContainer({ headline }: { headline: string }) {
  return (
    <div
      className="bg-[#f3f4f6] relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center p-[40px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <div
              className="bg-[#111928] h-full shrink-0 w-[4px]"
              data-name="Divider"
            />
          </div>
          <p
            className="flex-[1_0_0] leading-[1.5] min-h-px min-w-px not-italic relative text-[#111928] text-[22px] tracking-[-0.56px]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500 }}
          >
            {headline}
          </p>
        </div>
      </div>
    </div>
  );
}

function StoryContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div
      className="content-stretch flex items-end relative shrink-0 w-full"
      data-name="Title"
    >
      <div
        className="flex-[1_0_0] leading-[1.7] min-h-px min-w-px not-italic relative text-[#111928] text-[18px]"
        style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 400 }}
      >
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index < paragraphs.length - 1 ? "mb-[25px]" : ""}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function Detail({ merchant }: { merchant: MerchantStory }) {
  const imageSrc = merchantDetailImages[merchant.slug];

  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start max-w-[1080px] relative shrink-0 w-full"
      data-name="Detail"
    >
      <Title merchant={merchant} />
      <HeadlineContainer headline={merchant.headline} />
      {imageSrc && (
        <div className="h-[604px] relative shrink-0 w-full" data-name="Image">
          <img
            alt={merchant.name}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full rounded-[12px]"
            src={imageSrc}
          />
        </div>
      )}
      <StoryContent paragraphs={merchant.paragraph} />
    </div>
  );
}

function Body({ merchant }: { merchant: MerchantStory }) {
  return (
    <div
      className="content-stretch flex flex-col gap-[100px] items-center justify-center px-0 py-[60px] relative shrink-0 w-full"
      data-name="Body"
    >
      <Detail merchant={merchant} />
      <CTASection
        title={"Tidak Semuanya,\nHarus Sendiri."}
        description={
          "Setiap momen punya tantangan nya. \nFLIK siap menemani langkah bisnismu \ndi momen berikutnya."
        }
        buttonLabel="Hubungi Kami"
        buttonTo="/forms"
      />
    </div>
  );
}

export default function MerchantDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the merchant story by slug
  const merchant = merchantStories.find((story) => story.slug === slug);

  // If merchant not found, redirect to merchant list page
  if (!merchant) {
    return (
      <div className="bg-white content-stretch flex flex-col items-center justify-center relative size-full min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-8 py-20">
          <h1 className="font-['Satoshi:Bold',sans-serif] text-[48px] text-[#111928]">
            Merchant tidak ditemukan
          </h1>
          <p className="font-['Satoshi:Regular',sans-serif] text-[20px] text-[#6b7280]">
            Merchant yang Anda cari tidak tersedia.
          </p>
          <button
            onClick={() => navigate("/merchant")}
            className="bg-[#701bc1] content-stretch flex h-[64px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[250px] transition-colors duration-300 hover:bg-[#4A1280] cursor-pointer"
          >
            <p className="font-['Satoshi:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">
              Kembali ke Merchant Kami
            </p>
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      /* className="bg-white content-stretch flex flex-col items-center justify-center relative size-full" */
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name={merchant.name}
    >
      <Body merchant={merchant} />
    </div>
  );
}
