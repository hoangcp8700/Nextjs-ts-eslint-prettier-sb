import React from "react";

import { NextPageWithLayout } from "src/types/page";

import Error404 from "./404";
import Error500 from "./500";

interface ErrorPageProps {
  statusCode: number;
}
const ErrorPage: NextPageWithLayout<ErrorPageProps> = ({ statusCode }) => {
  const Layout = statusCode === 404 ? Error404 : Error500;
  return <Layout />;
};

export default ErrorPage;

ErrorPage.layout = undefined;
