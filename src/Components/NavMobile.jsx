import { Link } from "react-router-dom";
import { useNavbarAnimation } from "../hook/Gsap";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikon hamburger

export default function NavbarMobile() {
  const { navRef, logos, navone, navtwo, backgroundref } = useNavbarAnimation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        ref={navRef}
        className="flex z-[999] fixed w-full justify-center top-0 h-fit items-center"
      >
        {/* Glass Background */}
        <div
          ref={backgroundref}
          className="h-0 w-full bg-white bg-clip-padding backdrop-blur-3xl bg-opacity-10"
        ></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex z-[99] h-[60px] text-xl font-bold items-center py-3 gap-10 absolute top-0">
          <ul
            ref={navone}
            className="flex items-center gap-6 justify-center w-full"
          >
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
          </ul>

          <ul
            ref={navtwo}
            className="flex items-center gap-6 justify-center w-full"
          >
            <li>
              <Link to="/portfolio" className="hover:text-blue-500 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden z-[99] h-[60px] w-full px-4 items-center justify-between absolute top-0">
          {/* Logo */}
          <div className="flex items-center font-bold text-xl">
            <img src="./ones.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Hamburger Button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-white/10 backdrop-blur-lg z-[98] p-4 flex flex-col gap-4 text-lg">
            <Link to="/" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/portfolio" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/blog" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/contact" className="hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}

        {/* Logo besar (desktop animation) */}
        <div ref={logos} className="hidden md:flex absolute top-[200px]">
          <img src="./ones.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}
