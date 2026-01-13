import { useState } from "react";
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

function Box({ image, alt }) {
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
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 100,
          doubleClickDelay: 100,
          scrollToZoom: true,
        }}
      />
    </>
  )
}

export default function LightboxImage({image, alt, labelled}) {

  return labelled ?
  (
    <figure className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="bg-gray-50">
        <LightboxImage image={image} alt={alt} />
      </div>

      <figcaption className="border-t border-gray-100 px-4 py-3">
        <p className="text-sm font-semibold text-gray-900">
          {alt}
        </p>
      </figcaption>
    </figure>
  ) :
  (
    <Box image={image} alt={alt}/>
  );
}