import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

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
