import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import {
  services,
  projects,
  skills,
  testimonials,
  faqs,
  blogs,
} from "../Mock/index";
import Navbar from "../Components/Navbar";
import {
  useAboutAnimation,
  useSectionAnimation,
  useFAQAnimation,
  useTextAnimation,
} from "../hook/Gsap";
import { LoadingScreen } from "../Components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const homeContainerRef = useRef(null);

  // About section animation
  const { aboutRef, imageRef, textRef, skillRefs } = useAboutAnimation();

  // Section animations
  const { sectionRefs: serviceRefs, sectionRef: servicesRef } = useSectionAnimation("#services");
  const { sectionRefs: projectRefs, sectionRef: projectsRef } = useSectionAnimation("#projects");
  const { sectionRefs: testimonialRefs, sectionRef: testimonialsRef } = useSectionAnimation("#testimonials");
  const { sectionRefs: blogRefs, sectionRef: blogRef } = useSectionAnimation("#blog");

  // Text animations for headings
  const { textRef: aboutTitleRef } = useTextAnimation('[data-animate]', aboutRef);
  const { textRef: servicesTitleRef } = useTextAnimation('[data-animate]', servicesRef);
  const { textRef: projectsTitleRef } = useTextAnimation('[data-animate]', projectsRef);
  const { textRef: testimonialsTitleRef } = useTextAnimation('[data-animate]', testimonialsRef);
  const { textRef: faqTitleRef } = useTextAnimation('[data-animate]');
  const { textRef: blogTitleRef } = useTextAnimation('[data-animate]', blogRef);

  // Project modal state
  const [selectedProject, setSelectedProject] = useState(null);

  // FAQ state and animation
  const [activeIndex, setActiveIndex] = useState(null);
  const { contentRefs } = useFAQAnimation(activeIndex);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  useEffect(() => {
    if (showContent && homeContainerRef.current) {
      gsap.set(homeContainerRef.current, {
        opacity: 0,
      });

      gsap.to(homeContainerRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, [showContent]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && (
        <div
          ref={homeContainerRef}
          className="block font-me h-full w-full"
          style={{ opacity: 0 }}
        >
          <Navbar />

          {/* Overlay */}
          <div className="w-full h-screen"></div>

          {/* About Section */}
          <section
            ref={aboutRef}
            className="w-full relative py-20 px-6 md:px-20"
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
              {/* Photo */}
              <div ref={imageRef} className="flex justify-center">
                <div className="relative w-72 h-72 overflow-hidden rounded">
                  <img
                    src="https://i.pinimg.com/736x/db/13/44/db1344584375b58f863df96450a21720.jpg"
                    alt="Natanael"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div ref={textRef}>
                <div ref={aboutTitleRef}>
                  <h2
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--color-primary-me)" }}
                    data-animate="true"
                  >
                    About Me
                  </h2>
                </div>
                <p className="text-lg leading-relaxed mb-8">
                  Hi, saya <strong>Natanael</strong>. Saya{" "}
                  <span
                    style={{
                      color: "var(--color-accent-me)",
                      fontStyle: "italic",
                    }}
                  >
                    have fun for coding
                  </span>{" "}
                  — masih noob, tapi ngoding hanya sebagai hobi yang
                  menyenangkan. Selain itu, saya juga suka dunia{" "}
                  <strong>editing</strong> dan <strong>design</strong>.
                </p>

                {/* Skills */}
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                >
                  Skills
                </h3>
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      ref={(el) => (skillRefs.current[index] = el)}
                      className="px-3 py-1 text-sm rounded-lg border text-center shadow transition-all"
                      style={{
                        borderColor: "var(--color-secondary-me)",
                        backgroundColor: "rgba(90, 84, 212, 0.08)",
                        color: "var(--color--text-me)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="services"
            ref={servicesRef}
            className="w-full py-20 px-6 md:px-20 relative"
          >
            {/* Title */}
            <div className="text-center mb-14 relative z-10">
              <div ref={servicesTitleRef}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                  data-animate="true"
                >
                  My Services
                </h2>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Layanan yang saya tawarkan untuk membantu project Anda menjadi
                lebih keren, modern, dan profesional.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {services.map((srv, index) => (
                <div
                  key={index}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  className="p-6 rounded-xl border shadow-lg transition-all hover:scale-105 hover:shadow-xl flex flex-col items-center text-center backdrop-blur-md"
                  style={{
                    borderColor: "var(--color-secondary-me)",
                    backgroundColor: "rgba(90, 84, 212, 0.05)",
                  }}
                >
                  <div
                    className="p-4 rounded-full mb-4"
                    style={{
                      backgroundColor: "rgba(90, 84, 212, 0.1)",
                      color: "var(--color-primary-me)",
                    }}
                  >
                    {srv.icon}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "var(--color-accent-me)" }}
                  >
                    {srv.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{srv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            ref={projectsRef}
            className="w-full py-20 px-6 md:px-20 relative"
          >
            {/* Title */}
            <div className="text-center mb-14 relative z-10">
              <div ref={projectsTitleRef}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                  data-animate="true"
                >
                  My Projects
                </h2>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Beberapa karya dan project yang pernah saya kerjakan, dari
                desain hingga pengembangan web.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 relative z-10">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setSelectedProject(proj)}
                >
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center text-white text-lg font-semibold">
                    {proj.title}
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Preview */}
            {selectedProject && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedProject(null)}
              >
                <div
                  className="bg-white rounded-xl p-6 max-w-2xl w-full relative"
                  style={{ fontFamily: "var(--font-me)" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                    onClick={() => setSelectedProject(null)}
                  >
                    ✕
                  </button>
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="rounded-lg mb-4"
                  />
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-primary-me)" }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-700">{selectedProject.desc}</p>
                </div>
              </div>
            )}
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" ref={testimonialsRef} className="w-full py-20 px-6 md:px-20 relative">
            <div className="text-center mb-14 relative z-10">
              <div ref={testimonialsTitleRef}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                  data-animate="true"
                >
                  Testimonials
                </h2>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Beberapa kata dari orang-orang yang pernah bekerja sama dengan
                saya.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  ref={(el) => (testimonialRefs.current[index] = el)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{t.name}</h3>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{t.feedback}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section
            id="faq"
            className="w-full py-20 px-6 md:px-20 relative"
            style={{
              fontFamily: "var(--font-me)",
              background: "var(--color-background-me)",
              color: "var(--color--text-me)",
            }}
          >
            {/* Title */}
            <div className="text-center mb-14 relative z-10">
              <div ref={faqTitleRef}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                  data-animate="true"
                >
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Jawaban atas pertanyaan yang sering ditanyakan tentang saya dan
                skill yang saya miliki.
              </p>
            </div>

            {/* Accordion */}
            <div className="max-w-3xl mx-auto relative z-10 space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-medium text-lg hover:bg-gray-50"
                    style={{ color: "var(--color-primary-me)" }}
                  >
                    {faq.question}
                    {activeIndex === idx ? (
                      <Minus size={20} strokeWidth={2.5} />
                    ) : (
                      <Plus size={20} strokeWidth={2.5} />
                    )}
                  </button>
                  <div
                    ref={(el) => (contentRefs.current[idx] = el)}
                    style={{
                      height: 0,
                      overflow: "hidden",
                      opacity: 0,
                    }}
                    className="px-5 pb-5 text-gray-700"
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" ref={blogRef} className="w-full py-20 px-6 md:px-20 relative">
            {/* Heading */}
            <div className="text-center mb-14 relative z-10">
              <div ref={blogTitleRef}>
                <h2
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "var(--color-primary-me)" }}
                  data-animate="true"
                >
                  Blog
                </h2>
              </div>
              <p className="text-lg max-w-2xl mx-auto">
                Artikel, tutorial, dan cerita seputar desain, coding, dan
                teknologi.
              </p>
            </div>

            {/* Blog Cards */}
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {blogs.map((b, index) => (
                <div
                  key={index}
                  ref={(el) => (blogRefs.current[index] = el)}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <a href={b.link}>
                    <img
                      src={b.img}
                      alt={b.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{b.date}</span>
                      <h3
                        className="font-bold text-lg mt-2 mb-3"
                        style={{ color: "var(--color-primary-me)" }}
                      >
                        {b.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{b.excerpt}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}