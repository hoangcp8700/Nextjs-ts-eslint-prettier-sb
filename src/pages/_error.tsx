import { NextPage, NextPageContext } from "next";

import SEO from "@/components/templates/SEO";

import Custom404 from "./404";

type ErrorPageProps = {
  statusCode: number;
};

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <div>
    <SEO
      seoData={{
        title: "Error Page",
        description: "Error page Lorem",
        keyword: "Error Error Error",
      }}
      ogData={{
        ogTitle: "Error Page",
        ogDescription: "Error page Lorem",
        ogUrl: "https://google.com",
        ogImage: "https://source.unsplash.com/random",
      }}
    />
    {statusCode} error
    <Custom404 />
  </div>
);

const Error = ({ statusCode }: ErrorPageProps) => <ErrorPage statusCode={statusCode} />;

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err?.statusCode;
  return {
    statusCode,
  };
};

export default Error;
