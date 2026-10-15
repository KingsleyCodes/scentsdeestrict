"use client";

import Image from "next/image";
import { FaWhatsapp, FaCheckCircle, FaTruck, FaStar } from "react-icons/fa";

export default function Home() {
  const whatsappNumber = "2348027528273";

  const message = encodeURIComponent(
    "Hello! I would love to explore your perfume collection. Please send me your available fragrances and prices."
  );

  return (
    <main className="perfume-page min-h-screen px-4 py-4 md:py-8 flex flex-col items-center justify-between max-w-xl mx-auto">
      {/* Background decoration */}
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* Brand */}
      <header className="brand text-center mb-2 md:mb-4">
        <div className="brand-icon">✦</div>
        <h1 className="text-xl md:text-2xl font-bold tracking-widest">SCENTS</h1>
        <p className="text-xs tracking-wider text-gray-500">DEESTRICT</p>
      </header>

      {/* Main content */}
      <section className="hero w-full flex flex-col items-center text-center">
        <div className="eyebrow text-xs uppercase tracking-widest mb-1 text-gray-400 flex items-center justify-center gap-2">
          <span className="w-4 h-[1px] bg-gray-400 inline-block" />
          DISCOVER YOUR SIGNATURE SCENT
          <span className="w-4 h-[1px] bg-gray-400 inline-block" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-1">
          Smell Good.
          <br />
          <span>Feel Unforgettable.</span>
        </h2>

        <p className="description text-xs sm:text-sm text-gray-600 max-w-xs mb-2">
          Discover captivating fragrances that leave a lasting impression wherever you go.
        </p>

        {/* Main perfume image */}
        <div className="product relative my-1 sm:my-2 w-full max-w-[280px] sm:max-w-[340px] flex flex-col items-center">
          <div className="image-glow" />

          <Image
            src="/perfumess.png"
            alt="Luxury perfume bottle"
            width={430}
            height={480}
            priority
            className="perfume-image object-contain w-full h-auto"
          />

          <div className="product-caption text-[10px] sm:text-xs tracking-wider mt-1">
            <span>YOUR SCENT. YOUR STORY.</span>
            <div />
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <footer className="bottom w-full flex flex-col items-center text-center mt-2">
        <p className="cta-caption text-[10px] sm:text-xs text-gray-500 mb-1 tracking-wider uppercase">
          YOUR NEXT FAVOURITE FRAGRANCE IS A MESSAGE AWAY
        </p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-border w-full max-w-xs block mb-2"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="whatsapp-button flex items-center justify-between p-3 rounded-xl">
            <FaWhatsapp className="whatsapp-icon text-2xl" />
            <span className="flex flex-col text-left text-sm leading-tight ml-2">
              <strong className="font-semibold">Let's Talk Fragrances</strong>
              <small className="text-[10px] opacity-80">Chat with us on WhatsApp</small>
            </span>
            <span className="button-arrow text-lg font-bold ml-auto">↗</span>
          </span>
        </a>

        <p className="trust-line text-[10px] text-gray-400 tracking-widest uppercase">
          PREMIUM SCENTS <span>•</span> YOUR STYLE <span>•</span> YOUR ESSENCE
        </p>
      </footer>
    </main>
  );
}