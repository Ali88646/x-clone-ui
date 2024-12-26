"use client";

import { IKImage } from "imagekitio-next";

type Imagetype = {
  path: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
export default function Image({ path, w, h, alt, className, tr }: Imagetype) {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      alt={alt}
      className={className}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
    />
  );
}
