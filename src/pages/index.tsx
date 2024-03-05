import Layout from "@/components/layouts/Layout";
import Slider from "@/components/layouts/Slider";
import Image from "next/image";

 function Home() {
  return (
   <>
    <Layout children={undefined}>
      <Slider/>
      </Layout>
   </>
  );
}
export default Home