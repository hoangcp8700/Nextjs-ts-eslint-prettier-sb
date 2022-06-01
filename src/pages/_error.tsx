import { NextPageContext } from "next";

import ErrorPage from "./error";

type ErrorProps = {
  statusCode: number;
};
const Error = ({ statusCode = 404 }: ErrorProps) => <ErrorPage statusCode={statusCode} />;

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err?.statusCode;
  return { statusCode };
};

export default Error;
