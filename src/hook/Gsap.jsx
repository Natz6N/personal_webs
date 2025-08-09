// hooks/useGSAPAnimations.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useNavbarAnimation = () => {
  const navRef = useRef(null);
  const logos = useRef(null);
  const navone = useRef(null);
  const navtwo = useRef(null);
  const backgroundref = useRef(null);
  useEffect(() => {
    if (
      !navRef.current ||
      !backgroundref.current ||
      !logos.current ||
      !navone.current ||
      !navtwo.current
    )
      return;

    const ctx = gsap.context(() => {
      // Glassmorph effect on scroll
      gsap.to(navRef.current, {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=200",
          scrub: true,
        },
      });

      // Logo shrink
      gsap.fromTo(
        logos.current,
        { width: 600, top: 200 },
        {
          width: 80,
          top: -10,
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );

      // Navigation items slide in
      gsap.to(backgroundref.current, {
        height:60,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      });
      gsap.to(navtwo.current, {
        x: 80,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      });

      gsap.to(navone.current, {
        x: -80,
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { navRef, logos, navone, navtwo, backgroundref };
};

// Hook untuk text animation menggunakan SplitType
export const useTextAnimation = (
  selector = "[data-animate]",
  triggerElement = null
) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Create SplitType instance
      const targetElement =
        textRef.current.querySelector(selector) || textRef.current;

      if (targetElement) {
        const splitText = new SplitType(targetElement, {
          types: "lines, words, chars",
          tagName: "span",
        });

        // Get trigger element (if it's a ref, get current, otherwise use as is)
        const trigger =
          triggerElement?.current || triggerElement || textRef.current;

        // Animate the lines
        gsap.from(splitText.lines, {
          y: "100%",
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, [selector, triggerElement]);

  return { textRef };
};

// Hook untuk about section animations
export const useAboutAnimation = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    if (!aboutRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(imageRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(textRef.current, { x: 50, opacity: 0 });
      gsap.set(skillRefs.current, { scale: 0.8, opacity: 0 });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Image animation
      tl.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      })
        // Text slide in
        .to(
          textRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        // Skills animation
        .to(
          skillRefs.current,
          {
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, []);

  return { aboutRef, imageRef, textRef, skillRefs };
};

// Hook untuk section animations (services, projects, testimonials, blog)
export const useSectionAnimation = (sectionId, delay = 0) => {
  const sectionRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Wait for elements to be populated
    const timer = setTimeout(() => {
      if (sectionRefs.current.length === 0 || !sectionRef.current) return;

      const ctx = gsap.context(() => {
        // Set initial state
        gsap.set(
          sectionRefs.current.filter((ref) => ref !== null),
          {
            opacity: 0,
            y: 50,
          }
        );

        gsap.to(
          sectionRefs.current.filter((ref) => ref !== null),
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, [sectionId, delay, sectionRefs.current.length]);

  return { sectionRefs, sectionRef };
};

// Hook untuk FAQ accordion animations
export const useFAQAnimation = (activeIndex) => {
  const contentRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      contentRefs.current.forEach((ref, idx) => {
        if (ref) {
          gsap.to(ref, {
            height: activeIndex === idx ? "auto" : 0,
            opacity: activeIndex === idx ? 1 : 0,
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    });

    return () => ctx.revert();
  }, [activeIndex]);

  return { contentRefs };
};

// Hook untuk loading screen animation
export const useLoadingAnimation = (onComplete) => {
  const loadingRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!loadingRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Initial state
      gsap.set([logoRef.current, textRef.current, progressRef.current], {
        opacity: 0,
        y: 30,
      });

      // Animation sequence
      tl.to([logoRef.current, textRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
        .to(
          progressRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(progressRef.current, {
          width: "100%",
          duration: 2.5,
          ease: "power2.inOut",
        })
        .to(
          loadingRef.current,
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: "power3.inOut",
          },
          "+=0.3"
        )
        .to(
          overlayRef.current,
          {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, [onComplete]);

  return { loadingRef, logoRef, textRef, progressRef, overlayRef };
};

// Hook untuk home intro animation
export const useHomeIntroAnimation = (trigger = null) => {
  const homeContainerRef = useRef(null);

  useEffect(() => {
    if (!homeContainerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        homeContainerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, [trigger]);

  return { homeContainerRef };
};
