import React from "react";

import Text from "@/components/atoms/Text";
import SEO from "@/components/templates/SEO";
// import styles from "./aboutUs.module.css";

export type AboutUsContainerProps = {};

const AboutUsContainer: React.FC<AboutUsContainerProps> = () => (
  <div>
    <SEO
      seoData={{
        title: "About Page",
        description: "About page Lorem",
        keyword: "About About About",
      }}
      ogData={{
        ogTitle: "About Page",
        ogDescription: "About page Lorem",
        ogUrl: "https://google.com",
        ogImage: "https://source.unsplash.com/random",
      }}
    />

    <Text>Container AboutUs</Text>
  </div>
);

export default AboutUsContainer;
