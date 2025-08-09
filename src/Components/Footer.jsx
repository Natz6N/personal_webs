// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// export function Footer() {
//   const footerRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       footerRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: footerRef.current,
//           start: "top 90%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="relative z-10 mt-20"
//       style={{
//         backgroundColor: "var(--color-primary-me)",
//         color: "white",
//         fontFamily: "var(--font-me)",
//       }}
//     >
//       {/* Top Section */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-3 gap-8">
//         {/* Logo / Brand */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Natanael.dev</h2>
//           <p className="text-sm opacity-80">
//             Have fun for coding, design, and editing.  
//             Just a hobbyist who loves creating something new.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Navigation</h3>
//           <ul className="space-y-2 text-sm opacity-90">
//             <li><a href="#about" className="hover:underline">About</a></li>
//             <li><a href="#services" className="hover:underline">Services</a></li>
//             <li><a href="#projects" className="hover:underline">Projects</a></li>
//             <li><a href="#blog" className="hover:underline">Blog</a></li>
//             <li><a href="#contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
//           <div className="flex gap-4 text-2xl">
//             <a href="#" className="hover:text-gray-200"><FaGithub /></a>
//             <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
//             <a href="#" className="hover:text-gray-200"><FaLinkedin /></a>
//             <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div
//         className="text-center py-4 text-sm"
//         style={{
//           backgroundColor: "var(--color-accent-me)",
//         }}
//       >
//         © {new Date().getFullYear()} Natanael. All rights reserved.
//       </div>
//     </footer>
//   );
// }
