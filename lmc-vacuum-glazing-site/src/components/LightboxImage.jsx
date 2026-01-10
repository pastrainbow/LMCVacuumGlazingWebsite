import { useState } from "react";
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";

export default function LightboxImage({image, alt}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
      >
        <img
          src={image}
          alt={alt}
          className="aspect-[4/3] w-full object-contain p-6"
          loading="lazy"
        />
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image, alt: alt }]}
      />
    </>
  );
}