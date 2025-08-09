import { Link } from "react-router-dom";
import { useNavbarAnimation } from "../hook/Gsap";

export default function Navbar() {
  const { navRef, logos, navone, navtwo, backgroundref } = useNavbarAnimation();

  return (
    <>
      <div
        ref={navRef}
        className="flex z-[999] fixed w-full justify-center top-0 h-fit items-center"
      >
        <div
          ref={backgroundref}
          className="h-0 w-full bg-white-200 bg-clip-padding  backdrop-blur-3xl bg-opacity-10 "
        ></div>

        <div className="flex z-[99] h-[60px] text-xl font-bold items-center py-3 gap-2 absolute top-0">
          <ul
            ref={navone}
            className="flex relative items-center gap-6 justify-center w-full"
          >
            <li>
              <Link to="/" className="hover:text-blue-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-blue-500 transition-colors"
              >
                Services
              </Link>
            </li>
          </ul>

          <ul
            ref={navtwo}
            className="flex relative items-center gap-6 justify-center w-full"
          >
            <li>
              <Link
                to="/portfolio"
                className="hover:text-blue-500 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-500 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div ref={logos} className="flex absolute top-[200px]">
          <img src="./ones.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
}
