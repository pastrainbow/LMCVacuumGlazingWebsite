export default function Post({thumbnailImage, alt, title, Body}) {
  return (
    <div className="w-full">
      <header className="relative w-full overflow-hidden">
         <div className="absolute inset-0">

          <img
            src={thumbnailImage}
            alt={alt}
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <main className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Body/>
        </div>
      </main>

    </div>
  );
}
