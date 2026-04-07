"use client";
import OrbitingCircles from "@/components/OrbitingCircles";
import { motion } from "framer-motion";
import Background from "@/components/Background";
import { useEffect, useState } from "react";


export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
const [scale, setScale] = useState(1);

const images = [
  "/certifications/c1.png",
  "/certifications/c2.png",
  "/certifications/c3.png",
  "/certifications/c4.png",
  "/certifications/c5.png",
  //"/certifications/c6.png",
  //"/certifications/c7.png",
];

const openImage = (index: number) => {
  setSelectedIndex(index);
  setScale(1);
};

const closeImage = () => setSelectedIndex(null);

const nextImage = () =>
  setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));

const prevImage = () =>
  setSelectedIndex((prev) =>
    prev !== null ? (prev === 0 ? images.length - 1 : prev - 1) : 0
  );

const handleWheel = (e: React.WheelEvent<HTMLImageElement>) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    setScale((prev) => Math.min(prev + 0.2, 3));
  } else {
    setScale((prev) => Math.max(prev - 0.2, 1));
  }
};
  const [active, setActive] = useState("home");

  // 🎯 Typing Text
  const texts = [
    { text: "IT Engineer", color: "text-white" },
    { text: "Front-End Developer", color: "text-purple-500" },
    { text: "Network Engineer", color: "text-purple-500" },
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index].text;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.substring(0, displayText.length + 1));

        if (displayText === current) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));

        if (displayText === "") {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, index]);

  // 🔥 Active Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [ "about","skills", "certificates", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const offset = element.offsetTop - 200;
          if (window.scrollY >= offset) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans">

      <Background />

      {/* 👇 الحل الصح النهائي */}
      <div className="relative z-10 pointer-events-none">

        {/* Navbar */}
        <nav className="pointer-events-auto sticky top-0 z-50 flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-black/70 backdrop--md">
          <a
            href="/ammar_elias_cv.pdf"
            download
            className="text-sm border border-white-800 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>

          <div className="space-x-6 text-gray-300">
            <a href="#" className={active === "home" ? "text-white border-b border-white pb-1" : "hover:text-white"}>Home</a>
            <a href="#about" className={active === "about" ? "text-white border-b border-white pb-1" : "hover:text-white"}>About</a>
            <a href="#skills" className={active === "skills" ? "text-white border-b border-white pb-1" : "hover:text-white"}>Skills</a>
            <a href="#certificates" className={active === "certificates" ? "text-white border-b border-white pb-1" : "hover:text-white"}>Certificates</a>
            <a href="#contact" className={active === "contact" ? "text-white border-b border-white pb-1" : "hover:text-white"}>Contact</a>
          </div>
        </nav>

        
     {/* Hero */}
{/* Hero */}
<section className="pointer-events-auto py-28 px-6">

  <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

    {/* 🔵 LEFT */}
    <div className="flex flex-col items-center text-center md:items-center md:text-center">

      {/* NAME */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative text-5xl md:text-6xl font-extrabold mb-6"
      >
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 text-transparent bg-clip-text">
          Ammar Elias
        </span>

        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 blur-2xl opacity-40 animate-pulse">
          Ammar Elias
        </span>
      </motion.h2>

      {/* TYPING */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={`text-xl font-bold ${texts[index].color}`}
      >
        {displayText}
        <span className="animate-pulse">|</span>
      </motion.p>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative w-40 h-40 mt-10 self-center"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-2xl opacity-60"></div>

        <img
          src="/ADS.jpeg"
          alt="Profile"
          className="relative w-40 h-40 object-cover rounded-full border border-cyan-400/50 
          shadow-[0_0_25px_rgba(34,211,238,0.6)]"
        />
      </motion.div>

    </div>

    {/* 🟣 RIGHT */}
<div className="flex justify-center items-center">
  <OrbitingCircles />
</div>
</div>
</section>
          
        {/* About */}
        <section id="about" className="pointer-events-auto px-10 py-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-white-400 leading-8">
            I am Ammar, a Front-End Developer passionate about transforming complex ideas into seamless and engaging web experiences. With a background in Network Engineering, I bring a unique analytical perspective to problem-solving and development.

          I specialize in writing clean, efficient, and well-structured code that not only performs reliably but is also scalable and maintainable.

          I am also capable of working effectively within a team or leading teams in small to medium-sized projects.

          I am deeply invested in the latest advancements in technology, particularly AI models, and I actively keep up with cutting-edge developments in the tech world and modern development environments.

          </p>
        </section>
        <section id="skills" className="pointer-events-auto py-24 px-6 text-center relative">

  {/* 🔥 خلفية blur */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black blur-3xl opacity-50"></div>

  <div className="relative z-10">
    
    <h2 className="text-5xl font-extrabold mb-16 relative inline-block">

  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
    My Skills
  </span>

  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl opacity-50">
    My Skills
  </span>

</h2>

    {/* Programming Languages */}
    <h3 className="text-gray-400 tracking-widest mb-10">
      PROGRAMMING LANGUAGES
    </h3>

    <div className="flex justify-center flex-wrap gap-10 mb-20">
      {[
        { name: "JavaScript", img: "/skills/js.png" },
        { name: "TypeScript", img: "/skills/ts.png" },
        { name: "C++", img: "/skills/cpp.png" },
      ].map((skill, i) => (
        <div key={i} className="flex flex-col items-center">

          <div className="relative w-28 h-28 rounded-full flex items-center justify-center group overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:bg-cyan-400/40 transition"></div>

            {/* Glass circle */}
            <div className="relative w-full h-full rounded-full border border-cyan-400/50 
            backdrop-blur-md bg-white/5 flex items-center justify-center
            shadow-[0_0_25px_rgba(34,211,238,0.4)]
            group-hover:scale-110 transition duration-300 overflow-hidden">

              {/* ✅ الأيقونة بدون فراغ */}
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-4 text-gray-300">{skill.name}</p>
        </div>
      ))}
    </div>

    {/* Frontend Stack */}
    <h3 className="text-gray-400 tracking-widest mb-10">
      FRONTEND STACK
    </h3>

    <div className="flex justify-center flex-wrap gap-10">
      {[
        { name: "HTML", img: "/skills/html.png" },
        { name: "CSS", img: "/skills/css.png" },
        { name: "Bootstrap", img: "/skills/bootstrap.png" },
        { name: "React", img: "/skills/react.png" },
        { name: "Next.js", img: "/skills/next.png" },
        { name: "Tailwind", img: "/skills/tailwind.png" },
      ].map((skill, i) => (
        <div key={i} className="flex flex-col items-center">

          <div className="relative w-28 h-28 rounded-full flex items-center justify-center group overflow-hidden">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full  group-hover:bg-cyan-400/40 transition"></div>

            {/* Glass */}
            <div className="relative w-full h-full rounded-full 
border border-cyan-400/40 
bg-black/30 flex items-center justify-center overflow-hidden
shadow-[0_0_6px_rgba(34,211,238,0.3)]
group-hover:shadow-[0_0_10px_rgba(34,211,238,0.5)]
group-hover:scale-105 transition duration-300">

              {/* ✅ الأيقونة مليانة */}
              <img
                src={skill.img}
                alt={skill.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="mt-4 text-gray-300">{skill.name}</p>
        </div>
      ))}
    </div>

  </div>
</section>
        {/* Certificates */}
<section id="certificates" className="pointer-events-auto px-10 py-20">
  <h2 className="text-5xl font-extrabold mb-16 relative text-center">
  
  <span className="relative inline-block">
    
    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
      Certificates
    </span>

    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl opacity-50">
      Certificates
    </span>

  </span>

</h2>

  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

    {images.map((img, i) => (
      <div
        key={i}
        onClick={() => openImage(i)}
        className="group relative overflow-hidden rounded-2xl border border-gray-800 cursor-pointer"
      >
        <img
          src={img}
          className="w-full h-full object-cover aspect-[16/10] 
          group-hover:scale-105 transition duration-300"
        />
      </div>
    ))}

  </div>
</section>

        {/* Contact */}
        <section id="contact" className="pointer-events-auto px-10 py-24">

  <h2 className="text-5xl font-extrabold mb-16 relative text-center">
  
  <span className="relative inline-block">
    
    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
      Contact Me
    </span>

    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl opacity-50">
      Contact Me
    </span>

  </span>

</h2>

  <p className="text-center text-gray-400 mb-16">
    Actively seeking freelance, remote, part-time opportunities.
  </p>

  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      {/* Email */}
      <div className="p-6 rounded-2xl bg-blue-400/20 border border-blue-400">
        <p className="text-gray-400 text-sm">EMAIL</p>
        <p className="text-lg font-semibold">ammar.elias88@hotmail.com</p>
      </div>

      {/* WhatsApp */}
      <div className="p-6 rounded-2xl bg-blue-400/20 border border-blue-400">
        <p className="text-gray-400 text-sm">WHATSAPP</p>
        <p className="text-lg font-semibold">+31 614374341</p>
      </div>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ammar-elias-33736a2b4"
        target="_blank"
        className="block p-6 rounded-2xl bg-blue-400/20 border border-blue-400 hover:bg-blue-400/20 transition"
      >
        <p className="text-gray-400 text-sm">LINKEDIN</p>
        <p className="text-lg font-semibold">Ammar Elias</p>
      </a>

    </div>

    {/* RIGHT SIDE (FORM) */}
    <form
      action="https://formsubmit.co/ammar.elias88@hotmail.com"
      method="POST"
      className="p-8 rounded-2xl bg-blue-400/20 border border-blue-400 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl bg-black/40 border border-gray-700 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          className="p-4 rounded-xl bg-black/40 border border-gray-700 outline-none"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="w-full p-4 rounded-xl bg-black/40 border border-gray-700 outline-none"
      />

      <textarea
        name="message"
        placeholder="Tell me about your project..."
        rows={5}
        required
        className="w-full p-4 rounded-xl bg-black/40 border border-gray-700 outline-none"
      ></textarea>

      {/* Hidden config */}
      <input type="hidden" name="_captcha" value="false" />

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 font-semibold hover:opacity-90 transition"
      >
        Send Message →
      </button>

    </form>

  </div>
</section>

        {/* Footer */}
        <footer className="pointer-events-auto text-center py-10 border-t border-gray-800 text-gray-500">
          © 2026 Ammar Elias
        </footer>

      </div>
      {selectedIndex !== null && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

    <button
      onClick={closeImage}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    <button
      onClick={prevImage}
      className="absolute left-6 text-white text-4xl"
    >
      ‹
    </button>

    <button
      onClick={nextImage}
      className="absolute right-6 text-white text-4xl"
    >
      ›
    </button>

    <motion.img
      key={selectedIndex}
      src={images[selectedIndex]}
      onWheel={handleWheel}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: scale, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-[90%] max-h-[90%] rounded-xl"
    />
  </div>
)}
    </main>
  );
}