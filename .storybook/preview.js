import "../src/styles/globals.css";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  DesktopBig: {
    name: "Desktop Big",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  Desktop: {
    name: "Desktop",
    styles: {
      width: "1366px",
      height: "768px",
    },
  },
  Desktop13inch: {
    name: "Desktop 13inch",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
  IpadPro13inch: {
    name: "Ipad Pro 12.9inch",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  Ipad: {
    name: "Ipad",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  Iphone11ProMax: {
    name: "Iphone 11 Pro Max",
    styles: {
      width: "414px",
      height: "896px",
    },
  },
  Iphone11Pro: {
    name: "Iphone 11 Pro",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
  Iphone5: {
    name: "Iphone 5",
    styles: {
      width: "320px",
      height: "568px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: { viewports: { ...customViewports } },
};
