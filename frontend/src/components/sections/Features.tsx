import { Link } from "react-router-dom";
import { PinContainer } from "../ui/pin-container";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const pinVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const pinTransition = {
  duration: 0.5,
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="bg-[#DDF8E8] dark:bg-gray-800 pb-20">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
          <h2 className="text-5xl font-bold text-center mb-12 text-slate-800 dark:text-white">AI-Assistance</h2>
          <blockquote className="max-w-2xl mx-auto mb-6 text-lg italic text-gray-600 lg:mb-8 lg:text-xl dark:text-gray-300 text-center">
            "Harnessing technology to bring ancient wisdom to modern lives."
          </blockquote>
          <motion.div className="flex flex-wrap justify-center gap-20">
            <PinContainer title="Go to Chatbot">
              <Link to="http://localhost:8000/">
                <motion.div
                  variants={pinVariants}
                  initial="hidden"
                  animate="visible"
                  transition={pinTransition}
                  className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] bg-white shadow-lg rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800 flex items-center">
                    Ayurvedic Chatbot ✨
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal text-gray-700">
                    <span className="text">
                      Engage with our AI-powered chatbot to get personalized advice and recommendations based on Ayurvedic principles
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 relative">
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100"
                      src="chatbot.jpg"
                      alt="Chatbot Image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
                  </div>
                </motion.div>
              </Link>
            </PinContainer>
            <PinContainer title="Go to Prakruti analyzer">
              <Link to="/prakruti-analyzer">
                <motion.div
                  variants={pinVariants}
                  initial="hidden"
                  animate="visible"
                  transition={pinTransition}
                  className="flex basis-full flex-col p-4 tracking-tight text-black sm:basis-1/2 w-[20rem] h-[20rem] bg-white shadow-lg rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <h3 className="text-xl max-w-xs !pb-2 !m-0 font-bold text-base text-slate-800 flex items-center">
                    Analyze Prakruti 🧠
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal text-gray-700">
                    <span>
                      Discover your unique constitution (Prakruti) with our Prakruti analyzer tool. Get insights into your physical, mental, and emotional characteristics to support your holistic health journey
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 relative bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <img
                      className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-75 transition-opacity duration-300 hover:opacity-100"
                      src="prakruti.png"
                      alt="Prakruti Analyzer Image"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 rounded-lg"></div>
                  </div>
                </motion.div>
              </Link>
            </PinContainer>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
