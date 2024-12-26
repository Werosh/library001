import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Home = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="w-full text-white backdrop-blur-sm">
        {/* Hero Section */}
        <motion.section
          className="relative w-full h-[calc(100vh-60px)] flex items-center justify-center "
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="text-center">
            <motion.h1
              className="mb-9 font-extrabold sm:text-[65px] text-4xl font-charm text-stroke-3 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Welcome to the Digital Library
            </motion.h1>
            <motion.p
              className="mt-10 mb-6 text-2xl font-syne"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              Discover a world of knowledge at your fingertips. Access thousands
              of books, articles, and resources with ease.
            </motion.p>
            <motion.button
              className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Now
            </motion.button>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="px-6 py-16 mt-[70px] "
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-center">
            Why Choose Our Library?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              className="p-6 text-center bg-gray-800 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="mb-4 text-2xl font-bold">Extensive Collection</h3>
              <p>
                Access a wide variety of books, journals, and e-resources across
                multiple genres and disciplines.
              </p>
            </motion.div>
            <motion.div
              className="p-6 text-center bg-gray-800 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="mb-4 text-2xl font-bold">User-Friendly</h3>
              <p>
                Enjoy a seamless experience with our intuitive interface
                designed for ease of use.
              </p>
            </motion.div>
            <motion.div
              className="p-6 text-center bg-gray-800 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="mb-4 text-2xl font-bold">24/7 Availability</h3>
              <p>
                Access the library from anywhere, anytime. Your learning never
                stops with us.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="px-6 py-16"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              className="p-6 bg-gray-900 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p>
                "The digital library has completely transformed how I study. I
                can access everything I need in one place!"
              </p>
              <p className="mt-4 font-bold text-right">- Alex Johnson</p>
            </motion.div>
            <motion.div
              className="p-6 bg-gray-900 rounded-md shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <p>
                "I love the 24/7 availability and the vast collection. It’s
                perfect for research and leisure reading."
              </p>
              <p className="mt-4 font-bold text-right">- Samantha Brown</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          className="px-6 py-16 text-center bg-indigo-900"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold">Ready to Dive In?</h2>
          <p className="mb-6 text-lg">
            Sign up today and start exploring the vast resources our library
            offers. Whether you're a student, researcher, or avid reader,
            there's something for everyone!
          </p>
          <motion.button
            className="bg-[#FFD700] text-gray-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
