import Button from "../../components/flik-button";
import CTASection from "../../components/cta-section";

import svgPaths from "../../../imports/svg-yaeic72sto";

import { Link } from "react-router-dom";

import "../../../styles/mobile.css";

const LandingPageMobile = () => {
  return (
    <div className="px-[20px] py-[20px]">
      <div className={"hero-section content pb-[40px]"}>
        <div className={"heroTitle whitespace-pre-wrap"}>
          {`Menjaga momentum, \n& memberi ruang`}
          {` \nUntuk bergerak.`}
        </div>
        <div className={"heroDescriptionContainer"}>
          <div className={"heroDescription"}>
            Membantu bisnis untuk tetap memiliki ruang untuk bergerak dan
            beradaptasi di tengah berbagai kebutuhan operasional.
          </div>
          <div className={"buttons"}>
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
        </div>
      </div>
      <div className={"merchantSection pb-[20px]"}>
        <Link
          to="/merchant/emados"
          data-name="Merchant"
          className={"contentImage1"}
        >
          <div className={"text"}>
            <div
              className="relative shrink-0 size-[40px]"
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
            <div className={"contentDescriptionContainer"}>
              <p className={"contentDescription font-w500"}>
                Mendukung pembukaan 30+ cabang EMADO’S dengan operasional yang
                tetap terkendali.
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/merchant/heylocal"
          data-name="Merchant"
          className={"contentImage2"}
        >
          <div className={"text"}>
            <div
              className="relative shrink-0 size-[40px]"
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
            <div className={"contentDescriptionContainer"}>
              <p className={"contentDescription font-w500"}>
                Mendukung persediaan stok HEYLOCAL untuk melayani 500.000+
                transaksi saat peak season.
              </p>
            </div>
          </div>
        </Link>
        <Link
          to="/merchant/erigo"
          data-name="Merchant"
          className={"contentImage3"}
        >
          <div className={"text"}>
            <div
              className="relative shrink-0 size-[40px]"
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
            <div className={"contentDescriptionContainer"}>
              <p className={"contentDescription font-w500"}>
                Menjaga stok ERIGO sehingga dapat mendorong penjualan hingga
                200% di online dan offline store.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/merchant" className="contentImage4" data-name="Merchant">
          <div className={"text"}>
            <div
              className="relative shrink-0 size-[40px]"
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
            <p className={"contentDescription"}>
              Cek cerita merchant
              <br />
              lainnya, disini.
            </p>
          </div>
        </Link>
      </div>
      <CTASection
        title={"Ketika bisnis, \nMembutuhkan \nRuang Lebih."}
        description={
          "Jelaskan dengan detail mengenai kebutuhan bisnismu agar ruang gerak dan fleksibilitas dalam operasional tetap terjaga dengan baik."
        }
        buttonLabel="Hubungi Kami"
        buttonTo="/forms"
      />
    </div>
  );
};

export default LandingPageMobile;
