// LoadingScreen.jsx
import { useLoadingAnimation } from "../hook/Gsap";

export function LoadingScreen({ onLoadingComplete }) {
  const { loadingRef, logoRef, textRef, progressRef, overlayRef } =
    useLoadingAnimation(onLoadingComplete);

  return (
    <div
      ref={overlayRef} // overlayRef untuk slide up
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "var(--color-background-me)",
        color: "var(--color--text-me)",
      }}
    >
      {/* Wrapper content untuk animasi fade out */}
      <div ref={loadingRef} className="flex flex-col items-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="flex items-center justify-center w-28 h-28 rounded-2xl mb-8"
          style={{
            backgroundColor: "var(--color-secondary-me)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <span
            className="text-3xl font-bold"
            style={{
              color: "var(--color-primary-me)",
              fontFamily: "var(--font-me)",
            }}
          >
            N
          </span>
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-me)",
              color: "var(--color-primary-me)",
            }}
          >
            Natanael
          </h1>
          <p
            className="text-base"
            style={{ color: "var(--color--text-me)", opacity: 0.7 }}
          >
            Creative Developer & Designer
          </p>
        </div>

        {/* Progress */}
        <div className="w-64">
          <div
            className="h-2 rounded-full overflow-hidden"
            style={{
              backgroundColor: "var(--color-secondary-me)",
            }}
          >
            <div
              ref={progressRef}
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: "0%",
                backgroundColor: "var(--color-accent-me)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
