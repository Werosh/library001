import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Find from "./pages/Find";
import Request from "./pages/Request";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Aboutus from "./pages/Aboutus";

const App = () => {
  const location = useLocation();

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <div>
      <Background />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/trending"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Trending />
              </motion.div>
            }
          />
          <Route
            path="/new"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Find />
              </motion.div>
            }
          />
          <Route
            path="/request"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Request />
              </motion.div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Aboutus />
              </motion.div>
            }
          />
          <Route
            path="/login"
            element={
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <Login />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    
    </div>
  );
};

export default App;
