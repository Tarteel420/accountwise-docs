import type { ImgHTMLAttributes } from "react";

type ScreenshotProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "width"> & {
  src: string;
  alt: string;
  caption?: string;
  width?: number | string;
};

export function Screenshot({ src, alt, caption, width, style, ...props }: ScreenshotProps) {
  const maxWidth =
    width === undefined ? undefined : typeof width === "number" ? `${width}px` : width;
  return (
    <figure className="aw-screenshot">
      <img src={src} alt={alt} loading="lazy" style={{ maxWidth, ...style }} {...props} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
