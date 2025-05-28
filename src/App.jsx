import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

import { motion } from "framer-motion";

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          initial={{ opacity: 0, y: Math.random() * 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [Math.random() * -100, Math.random() * 100, Math.random() * -100],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const App = () => (
  <div className="relative z-0 bg-black text-white">
    <FloatingParticles />
    <div className="bg-hero-pattern bg-cover bg-fixed bg-center min-h-screen flex flex-col
">
      <Navbar />
      <Hero />
    </div>

    <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-10 py-10 text-center">

      {[
        { component: <About />, color: "blue" },
        { component: <Experience />, color: "pink" },
        { component: <Tech />, color: "green" },
        { component: <Works />, color: "orange" },
        { component: <Feedbacks />, color: "purple" },
      ].map(({ component, color }, index) => (
        <div
          key={index}
          className={`border border-neon-${color} p-6 rounded-xl shadow-lg`}
        >
          {component}
        </div>
      ))}
    </div>

    <div className="relative z-0">
      <StarsCanvas />
    </div>
  </div>
);


// Create router with future flags for React Router v7
const router = createBrowserRouter([
  { path: "/", element: <App /> },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

// Wrap the app in RouterProvider
const Root = () => <RouterProvider router={router} />;

export default Root;
