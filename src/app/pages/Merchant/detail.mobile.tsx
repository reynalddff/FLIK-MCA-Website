import { useParams, useNavigate, Link } from "react-router-dom";
import { merchantStories, MerchantStory } from "./merchantStories";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CTASection from "../../components/cta-section";

import svgPaths from "../../../imports/svg-yaeic72sto";

import imgEmadosDetail from "../../../assets/ImageDetailEmados.png";

import "../../../styles/mobile.css";

const HeaderContent = ({ merchant }: { merchant: MerchantStory }) => {
  return (
    <div className="header-content">
      <a
        className="header-link"
        href={merchant.websiteUrl ? `https://${merchant.websiteUrl}` : "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {merchant.websiteUrl}
      </a>
      <p className="header-merchant-name">{merchant.name}</p>
    </div>
  );
};

const HighlightContent = ({ merchant }: { merchant: MerchantStory }) => {
  return (
    <div className="highlight-content">
      <div className="flex flex-row items-center self-stretch">
        <div
          className="bg-[#111928] h-full shrink-0 w-[4px]"
          data-name="Divider"
        />
      </div>
      <div className="highlight-content-text">{merchant.headline}</div>
    </div>
  );
};

const ImageAndParagraphContent = ({
  merchant,
}: {
  merchant: MerchantStory;
}) => {
  return (
    <div className="image-and-paragraph-content pb-[40px]">
      <img
        className="image-content pb-[20px]"
        alt="Detail Image"
        src={merchant.ImageDetailSrc}
      />
      <div className="paragraph-content">
        {merchant.paragraph.map((paragraph, index) => (
          <p
            key={index}
            className={index < merchant.paragraph.length - 1 ? "mb-[20px]" : ""}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

const MerchantDetail = ({ merchant }: { merchant: MerchantStory }) => {
  return (
    <div className="merchant-detail-content ">
      <HeaderContent merchant={merchant} />
      <HighlightContent merchant={merchant} />
      <ImageAndParagraphContent merchant={merchant} />
    </div>
  );
};

const MerchantDetailMobile = ({ merchant }: { merchant: MerchantStory }) => {
  return (
    <div className="px-[20px] py-[20px]">
      <MerchantDetail merchant={merchant} />
      <CTASection
        title={"Tidak semuanya \nharus sendiri."}
        description="Setiap momen punya tantangan nya. FLIK siap menemani langkah bisnismu di momen berikutnya."
        buttonLabel="Hubungi Kami"
        buttonTo="/form"
      />
    </div>
  );
};

export default MerchantDetailMobile;
