import React from "react";
import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
// Sections
import { CoverSection } from "../components/sections/cover-section";

const App = () => {
  return (
    <Layout>
      <SEO />
      <CoverSection />
    </Layout>
  );
};

export default App;
