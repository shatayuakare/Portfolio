import SocialIcon from "../components/SocialIcon";

const Home = () => {
  return (
    <section className="content-center pt-12" id="home">
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="content-center sm:order-2 md:order-1">
          <div className="grid sm:gap-2 md:gap-4 leading-none">
            <div className="sm:text-lg md:text-2xl">
              Hello,{" "}
              <span className="text-primary sm:text-xl md:text-2xl font-semibold">
                I'm
              </span>
            </div>

            <div className="sm:text-3xl md:text-[4vw] font-['Orbitron'] uppercase font-bold">
              Shatayu Akare
            </div>

            <div className="sm:text-xl md:text-[1.8vw] dark:text-dark-lightText light:text-light-lightText ">
              Full Stack Developer and Application Development
            </div>
            <div className="dark:text-dark-lightText light:text-light-lightText sm:text-sm md:text-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus ab, laboriosam neque perspiciatis quam aspernatur
              soluta perferendis quidem asperiores deleniti. Tempora illum
              explicabo praesentium dolorum.
            </div>
          </div>
          <div className="grid sm:gap-2 md:gap-5 mt-5">
            <h5 className="text-lg font-semibold">Find me On</h5>
            <SocialIcon />
          </div>
        </div>

        <div className="flex md:justify-end sm:justify-center sm:order-1 md:order-2">
          <div className="rounded-full md:h-[35vw] md:w-[35vw] bg-gradient-to-l from-transparent to-primary from-25%">
            <img
              className="mx-auto h-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/050/759/843/small_2x/professional-man-working-on-laptop-in-a-blue-suit-transparent-png.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
