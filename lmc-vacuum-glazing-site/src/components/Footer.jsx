import { contactMethods, addresses } from "../contactInfo";
import { NavSection } from "./Utils";


export default function Footer() {
  return (
    <NavSection id="Contact">
      <footer className={"relative w-full overflow-hidden"}> 
        {/* Teal grid background */}
        <div
          className="absolute inset-0 bg-brand-teal"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center text-white">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            We&apos;re here to help
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-2xl text-white/90">
            Our experienced team are ready to help you with your enquiry.
          </p>

          {/* Contact buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.href}
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-white/80
                  px-8 py-3 text-lg font-semibold text-white
                  transition hover:bg-white hover:text-teal-700
                  focus:outline-none focus:ring-2 focus:ring-white/40
                "
              >
                {method.content}
              </a>
            ))}
          </div>

          {/* Addresses */}
          <div className="mt-10">
            <address className="not-italic">

              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 text-lg text-white/80 sm:grid-cols-2">
                
                {addresses.map((address) => (
                  <div key={address.region}>
                    <h3 className="mb-2 font-semibold text-white">
                      {address.region} Office
                    </h3>
                    <a
                      href={genGoogleMapLink(address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leading-relaxed hover:underline"
                    >
                      {address.addressLines.map((line) => (
                        <span key ={line}>
                          {line}<br />
                        </span>
                      ))}
                    </a>
                  </div>
                ))}
              </div>
            </address>
          </div>



          {/* Copyright */}
          <div className="mt-16 text-xs text-white/70">
            © {new Date().getFullYear()} LMC Vacuum Glazing <br></br>
            Website made by Adam Li
          </div>
        </div>
      </footer>
    </NavSection>
  );
}

function genGoogleMapLink(address) {
  let link = "https://www.google.com/maps?q=";
  for (const line of address.addressLines) {
    link += line + "+";
  }
  // Google Map is fine with the ending +, so don't need to deal with it
  return link
}
