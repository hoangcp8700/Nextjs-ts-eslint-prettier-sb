import { NextPageWithLayout } from "@/types/page";
import AboutUsContainer from "@/containers/AboutUs";
import Layout from "@/components/templates/Layout";

interface AboutUsPageProps {}

const AboutUsPage: NextPageWithLayout<AboutUsPageProps> = () => <AboutUsContainer />;

export default AboutUsPage;

AboutUsPage.layout = Layout.Default;
