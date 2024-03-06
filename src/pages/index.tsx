import InfyAbout from "@/components/layouts/InfyAbout";
import Layout from "@/components/layouts/Layout";
import Networks from "@/components/layouts/Networks";
import OurPartner from "@/components/layouts/OurPartner";
import Plans from "@/components/layouts/Plans";
import Slider from "@/components/layouts/Slider";
import Image from "next/image";

function Home() {
  return (
    <>
      <Layout>
        <Slider/>
        <Plans/>
        <Networks/>
        <InfyAbout/>
        <OurPartner/>
      </Layout>
    </>
  );
}

export default Home;
