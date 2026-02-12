import SocialIcon from "../components/SocialIcon";

const Home = () => {
  return (
    <section className="content-center pt-12" id="home">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="content-center sm:order-2 md:order-1">
          <div className="grid sm:gap-2 md:gap-4 leading-none">
            <div className="sm:text-lg md:text-2xl text-light-text/80 dark:text-dark-text/80">
              Hello,{" "}
              <span className="text-primary sm:text-xl md:text-2xl font-semibold">
                I'm
              </span>
            </div>

            <div className="sm:text-3xl text-light-text dark:text-dark-text md:text-[4vw] font-['Orbitron'] uppercase font-bold">
              Shatayu Akare
            </div>
            <div className="flex gap-4 mt-2">
              <div className="w-1/4 h-1 border-1 rounded-full bg-primary"></div>
              <div className="w-1  h-1 border-1 rounded-full bg-primary"></div>
              <div className="w-1  h-1 border-1 rounded-full bg-primary"></div>
              <div className="w-1  h-1 border-1 rounded-full bg-primary"></div>
            </div>
            <div className="sm:text-xl md:text-[1.8vw] dark:text-dark-lightText text-light-text/80 font-semibold">
              Full Stack Developer and Data Analyst
            </div>
            <div className="dark:text-dark-lightText text-light-text/75 text-lg leading-6">
              Passionate about crafting full-stack and mobile applications,
              combining creativity and technical skills to deliver innovative
              solutions that enhance user experience and solve real-world
              problems.
            </div>
          </div>
          <div className="grid sm:gap-2 md:gap-5 mt-5">
            <h5 className="text-lg font-semibold text-light-text/80 dark:text-dark-text/90">Find me On</h5>
            <SocialIcon />
          </div>
        </div>

        <div className="flex md:justify-end sm:justify-center sm:order-1 md:order-2">
          <div className="sm:w-full sm:h-[25rem] sm:pt-10 md:h-[30rem] md:w-[30rem] lg:h-[35rem] lg:w-[35rem] bg-gradient-to-l from-transparent to-primary from-25% mask mask-hexagon-2 overflow-hidden relative">
            <img
              className="absolute sm:top-12 sm:left-0 sm:right-0 md:right-0 md:left-0"
              src="./photo.png"
              alt="Shatayu Akare"
            />
            {/* https://i.ibb.co/CKH64XX2/photo.png */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
