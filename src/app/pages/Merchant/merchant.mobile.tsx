import { Link } from "react-router-dom";

import "../../../styles/mobile.css";

import CtaSection from "../../components/cta-section";

//icon arrow circle right
import svgPaths from "../../../imports/svg-x9wdmk33ce";

import imageEmados from "../../../assets/ImageThumbnailEmados.png";
import imageHeylocal from "../../../assets/ImageThumbnailHeylocal.png";
import imageErigo from "../../../assets/ImageThumbnailErigo.png";
import imageBegor from "../../../assets/ImageThumbnailBegor.png";
import imageJokopi from "../../../assets/ImageThumbnailJokopi.png";

import { merchantStories } from "./merchantStories";

const TitleSection = () => {
  return (
    <div className={"hero-about pb-[40px]"}>
      <div className={"melaluiPendekatanYang"}>
        Pertumbuhan Nyata <br />
        Yang Sebenernya
      </div>
      <div className={"berangkatDariPemahaman"}>
        Berangkat dari pemahaman bahwa bisnis tidak selalu stabil, dan keputusan
        terbaik perlu diambil dengan kepastian dan kendali.
      </div>
    </div>
  );
};

type MerchantProps = {
  imgSource: string;
  merchantName: string;
  merchantDesc: string;
  link: string;
};

function Merchant({
  imgSource,
  merchantName,
  merchantDesc,
  link,
}: MerchantProps) {
  // Arrow Circle Right Icon
  function ArrowCircleRight() {
    return (
      <div
        className="relative shrink-0 size-[36px]"
        data-name="ArrowCircleRight"
      >
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

  return (
    <div className="merchant">
      <Link to={link} data-name="Merchant">
        <img className={"merchant-image-thumbnail"} alt="" src={imgSource} />
        <div className={"merchant-text-container"}>
          <div className={"merchant-text"}>
            <p className={"merchant-text-name"}>{merchantName}</p>
            <div className={"merchant-text-description"}>{merchantDesc}</div>
          </div>
          <ArrowCircleRight />
        </div>
      </Link>
    </div>
  );
}
const ListOfMerchantsSection = () => {
  return (
    <div className="merchants pb-[40px]">
      {merchantStories.map((merchant) => (
        <Merchant
          imgSource={merchant.thumbnailSrc}
          merchantName={merchant.name}
          merchantDesc={merchant.headline}
          link={merchant.slug}
        />
      ))}
    </div>
  );
};

const MerchantPage = () => {
  return (
    <div className="px-[20px] py-[40px]">
      <TitleSection></TitleSection>
      <ListOfMerchantsSection></ListOfMerchantsSection>
      <CtaSection
        title={"Setiap Bisnis, \npunya Cerita \nUniknya"}
        description={
          "Dan setiap cerita butuh partner yang tepat untuk berbagi dan bertukar pengalaman"
        }
        buttonLabel={"Hubungi Kami"}
        buttonTo={"/form"}
      />
    </div>
  );
};

export default MerchantPage;
