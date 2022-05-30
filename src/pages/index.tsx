import { NextPageWithLayout } from "@/types/page";
import HomeContainer, { HomePageProps } from "@/containers/Home";
import Layout from "@/components/templates/Layout";

const HomePage: NextPageWithLayout<HomePageProps> = () => <HomeContainer />;

export default HomePage;

HomePage.layout = Layout.Primary;
