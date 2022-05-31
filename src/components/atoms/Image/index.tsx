import Image, { ImageProps } from "next/image";
import React from "react";

export type ImageType = ImageProps & {
  wrapStyle?: string;
  alt: string;
};

const myLoader = ({ src }: { src: string }) => `${src}`;

const ImageComponent: React.FC<ImageType> = ({ wrapStyle, src, alt, ...props }) => (
  <div className='a-image'>
    <Image loader={myLoader} src={src} alt={alt} {...props} />
  </div>
);

export default ImageComponent;
