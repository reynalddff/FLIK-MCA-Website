import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import Desktop from "./merchant.desktop";
import Mobile from "./merchant.mobile";

import { useIsMobile } from "../../../hooks/useIsMobile";

const Container = () => {
  const isMobile = useIsMobile(800);

  if (isMobile) return <Mobile />;
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
