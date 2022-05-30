import { NextPageWithLayout } from "@/types/page";
import ProductContainer from "@/containers/Product";

interface ProductPageProps {}

const ProductPage: NextPageWithLayout<ProductPageProps> = () => <ProductContainer />;

export default ProductPage;

// ProductPage.layout = Layout.Primary;
