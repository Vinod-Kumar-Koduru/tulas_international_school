import { motion } from "framer-motion";
import { hero } from "../../data/content";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-20 font-sans dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 py-16">
        {/* Left Column: Main Typography */}
        <div className="lg:col-span-4 relative z-20">
          <p className="mb-5 inline-flex rounded-full border-2 border-ink bg-brand px-4 py-2 text-sm font-extrabold text-ink">
            {hero.eyebrow}
          </p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.1] dark:text-white"
          >
            {hero.title}
            <br />
            <span className="relative inline-block">
              {hero.titleContinuation}
              {/* Yellow Marker Underline SVG */}
              <svg
                className="absolute -bottom-3 left-0 w-full h-4"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15C45 5 130 5 198 12"
                  stroke="#FDE047"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M15 18C60 10 140 10 190 15"
                  stroke="#FDE047"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Dotted Arrow Pointing to Center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-32 left-10 hidden lg:block"
          >
            <svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 140 C 0 80, 50 30, 140 20"
                stroke="#FDE047"
                strokeWidth="2"
                strokeDasharray="6 6"
                fill="transparent"
              />
              <path
                d="M130 10 L145 20 L135 35"
                stroke="#FDE047"
                strokeWidth="2"
                fill="transparent"
              />
            </svg>
          </motion.div>

          {/* Green Plus */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 right-10 text-teal-600 hidden lg:block"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
            </svg>
          </motion.div>
        </div>

        {/* Center Column: Image & Floating Cards */}
        <div className="lg:col-span-5 relative min-h-[500px] flex justify-center items-end">
          {/* Background Organic Blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -z-10 transform -rotate-12 scale-110"></div>
          <div className="absolute top-0 right-[-10%] w-[450px] h-[450px] bg-accent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-20"></div>

          {/* Main Student Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://res.cloudinary.com/dzyngr915/image/upload/v1791045227/image_fa0e872b_npeztf.jpg"
            alt="Student holding books"
            className="relative z-10 w-full max-w-[380px] rounded-b-full rounded-t-full object-contain drop-shadow-2xl"
          />

          {/* Floating Card 1 (Left) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 -left-12 lg:-left-24 bg-white border-2 border-ink rounded-2xl p-4 shadow-[4px_4px_0px_rgba(17,24,39,1)] w-56 lg:w-64 z-30 transform -rotate-3 dark:bg-slate-900"
          >
            <h3 className="font-bold text-ink text-sm mb-1 dark:text-white">
              Learning with purpose
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-300">
              A balanced education that builds knowledge, confidence and
              curiosity.
            </p>
          </motion.div>

          {/* Floating Card 2 (Right) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-12 -right-8 lg:-right-20 bg-white border-2 border-ink rounded-2xl p-4 shadow-[4px_4px_0px_rgba(17,24,39,1)] w-56 lg:w-64 z-30 transform rotate-2 dark:bg-slate-900"
          >
            {/* Bus Icon */}
            <div className="w-10 h-8 bg-accent border-2 border-ink rounded flex items-center justify-center mb-2 relative overflow-hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 10h16M6 14h12M4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6L18 2H6L4 6z" />
                <circle cx="8" cy="18" r="2" fill="#111827" />
                <circle cx="16" cy="18" r="2" fill="#111827" />
              </svg>
            </div>
            <h3 className="font-bold text-ink text-sm mb-1 dark:text-white">
              Ready for every journey
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-300">
              Supportive teachers help students take their next steps with
              confidence.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Text & Button */}
        <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right relative z-20">
          {/* Yellow Plus */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 right-32 text-accent hidden lg:block"
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
            </svg>
          </motion.div>

          {/* Graduation Cap */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8 relative"
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 20 L90 40 L50 60 L10 40 Z"
                fill="#374151"
                stroke="#111827"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M25 48 V70 C25 80 50 85 75 70 V48"
                fill="#4B5563"
                stroke="#111827"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M50 60 V85"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle
                cx="50"
                cy="88"
                r="4"
                fill="#FBBF24"
                stroke="#111827"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <p className="text-sm text-slate-600 mb-6 max-w-[280px] dark:text-slate-300">
            {hero.text}
          </p>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand text-ink font-bold px-8 py-3 rounded-full border-2 border-ink shadow-[3px_3px_0px_rgba(17,24,39,1)] hover:bg-teal-300 transition-colors"
          >
            {hero.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
