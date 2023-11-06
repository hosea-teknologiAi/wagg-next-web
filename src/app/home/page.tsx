import React from "react";
import { Metadata } from "next";
import "./homeStyles.scss";
import Featured from "@/components/Home/Featured";
import PageIntro from "@/components/Home/PageIntro";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <PageIntro />
      <Featured />
      {/* <ProductsFeatured /> */}
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
