import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import { ToastContainer } from "react-toastify";

const HomeScreen = () => {
  return (
    <main
      className="text-dark-text sm:px-3 md:px-20 lg:px-24 dark:bg-dark-background bg-light-background"
    >
      <Home />
      <Skills />
      <div className="divider p-0 m-0"> </div>
      <Services />
      <div className="divider p-0 m-0"> </div>
      <Experience />
      <div className="divider p-0 m-0"> </div>
      <Education />
      <div className="divider p-0 m-0"> </div>
      <Project />
      <div className="divider p-0 m-0"> </div>
      <Contact />
    </main>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <ToastContainer
        style={{ height: 0 }}
        autoClose={1500}
        closeOnClick
        theme="dark"
      />
      <Footer />
    </>
  );
};

export default App;
