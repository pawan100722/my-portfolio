import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImageLoader = ({ image, style={}}:{image:any, style?:any}) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} 
      width={image.width}
      effect="blur"
      style={style}
    />
    <span>{image.caption}</span>
  </div>
);

