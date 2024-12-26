import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const Login = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Backend integration here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children animations
        delayChildren: 0.2, // Delay children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-60px)] mt-[60px] overflow-hidden backdrop-blur-[3px] flex justify-center items-center">
        <div className="p-8 bg-white rounded-lg shadow-md w-96">
          <AnimatePresence>
            <motion.div
              key={isCreatingAccount ? "signup" : "login"}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col" // Use flex column for layout
            >
              <motion.h2
                variants={itemVariants}
                className="mb-4 text-2xl font-bold"
              >
                {isCreatingAccount ? "Create Account" : "User Login"}
              </motion.h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="username"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="password"
                    className="block mb-2 font-bold text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                {isCreatingAccount && (
                  <>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="email"
                        className="block mb-2 font-bold text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="firstName"
                        className="block mb-2 font-bold text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="lastName"
                        className="block mb-2 font-bold text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </motion.div>
                  </>
                )}

                <motion.button
                  variants={itemVariants}
                  type="submit"
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {isCreatingAccount ? "Create Account" : "Login"}
                </motion.button>
              </form>
              <motion.p variants={itemVariants} className="mt-4 text-center">
                {isCreatingAccount
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button
                  type="button"
                  className="ml-1 text-blue-500 hover:underline"
                  onClick={() => setIsCreatingAccount(!isCreatingAccount)}
                >
                  {isCreatingAccount ? "Login" : "Create Account"}
                </button>
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Login;
