import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

const HomeScreen = () => {
  return (
    <main
      className="dark:bg-dark-background dark:text-dark-text dark:border-dark-border  
      sm:px-3 md:px-20 lg:px-24 light:bg-light-background light:text-light-text light:border-light-border  "
    >
      <Home />
      <Skills />
      <div className="divider p-0 m-0"> </div>
      <Services />
      <div className="divider p-0 m-0"> </div>
      <Project />
      <div className="divider p-0 m-0"> </div>
      <Resume />
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
      <Footer />
    </>
  );

  // return (
  //   <BrowserRouter>
  //     <Header />
  //     <Routes>
  //       <Route path="/" Component={HomeScreen} />
  //     </Routes>
  //     <Footer />
  //   </BrowserRouter>
  // );
};

export default App;
