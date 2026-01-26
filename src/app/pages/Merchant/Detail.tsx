import { useParams, Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { merchantStories, MerchantStory } from "./merchantStories";

import Desktop from "./detail.desktop";
import Mobile from "./detail.mobile";

import { useIsMobile } from "../../../hooks/useIsMobile";

const Container = () => {
  const { slug } = useParams<{ slug: string }>();
  const merchant = merchantStories.find((story) => story.slug === slug);

  const isMobile = useIsMobile(800);

  if (!merchant) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-20">
        <h1 className="font-['Satoshi:Bold',sans-serif] text-[32px] text-[#111928]">
          Merchant tidak ditemukan
        </h1>
        <p className="font-['Satoshi:Regular',sans-serif] text-[18px] text-[#6b7280] text-center max-w-[420px]">
          Merchant yang Anda cari tidak tersedia.
        </p>
        <Link
          to="/merchant"
          className="bg-[#701bc1] content-stretch flex h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[10px] shrink-0 w-[240px] transition-colors duration-300 hover:bg-[#4A1280] cursor-pointer"
        >
          <span className="font-['Satoshi:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-white">
            Kembali ke Merchant Kami
          </span>
        </Link>
      </div>
    );
  }

  if (isMobile) return <Mobile merchant={merchant} />;
  return <Desktop />;
};

export default function MerchantPage() {
  return (
    <>
      <Navbar />
      <Container />
      <Footer />
    </>
  );
}
