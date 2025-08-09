import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function HeaderHome() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      opacity: 0.4, // overlay tetap ada sedikit
      duration: 1.2,
      ease: "power2.out",
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

    tl.from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.7");

    tl.from(btnRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.5");
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay untuk efek darken + blur */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-[3px] z-10"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 text-white">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
        >
          HELLO EVERYONE
        </h1>
        <p
          ref={descRef}
          className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]"
        >
          Selamat datang di website kami! Jelajahi pengalaman penuh inspirasi dan inovasi.
        </p>
        <button
          ref={btnRef}
          className="mt-8 px-6 py-3 bg-blue-500/90 backdrop-blur-md text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
