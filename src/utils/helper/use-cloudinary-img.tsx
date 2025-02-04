import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../../main";
import { fill } from "@cloudinary/url-gen/actions/resize";

interface CloudinaryImgProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CloudinaryImg({ src, width, height, className }: CloudinaryImgProps) {
  const imgPublicId = src.substring(src.lastIndexOf("/") + 1);
  const imgSrc = cld.image(imgPublicId);

  if (width && height) {
    imgSrc.resize(fill().width(width).height(height));
  }

  return <AdvancedImage cldImg={imgSrc} className={className} style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "100%" }} />;
}
