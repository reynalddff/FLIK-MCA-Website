import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import Desktop from "./about.desktop";
import Mobile from "./about.mobile";

import { useIsMobile } from "../../../hooks/useIsMobile";

const Container = () => {
  const isMobile = useIsMobile(840);

  if (isMobile) return <Mobile />;
  return <Desktop />;
};

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Container />
      <Footer />
    </>
  );
}
