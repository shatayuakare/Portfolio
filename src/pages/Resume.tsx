import PageHeading from "../components/PageHeading";
import experience from "../json/experiences.json";
import education from "../json/education.json";

const Resume = () => {
  return (
    <section className="content-center py-10" id="resume">
      <PageHeading title={"Year of experience"} describe={"My Resume"} />

      <div className="grid grid-cols-1 gap-14">
        <div className="">
          <div className="ps-0 pb-6 ">
            <h3 className="text-[2.2vw] light:text-light-lightText dark:text-dark-lightText font-semibold">
              Job Experience
            </h3>
            <div className="text-primary font-semibold text-lg">
              2019 - 2025
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {experience.map((elem, index) => (
              <div key={index} className="relative group">
                <div className="bg-dark-lightBackground/30 rounded-lg p-5 border border-primary/5 hover:border-primary/20 transition-all duration-300">
                  <div className="absolute -top-3 -right-2 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {elem.duration}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10">
                      <i className="bx bx-code-alt text-primary"></i>
                    </div>
                    <h3 className="text-lg font-medium dark:text-dark-Text light:text-light-text">
                      {elem.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm dark:text-dark-lightText/70">
                    <i className="bx bx-building-house text-primary"></i>
                    <span>{elem.company}</span>
                  </div>

                  <p className="text-sm dark:text-dark-lightText/60 line-clamp-3">
                    {elem.description ||
                      "Worked on various web development projects using modern technologies and best practices. Collaborated with team members to deliver high-quality solutions."}
                  </p>

                  <div className="mt-4 pt-3 border-t border-primary/5">
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80">
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div className="ps-0 pb-6 ">
            <h3 className="text-[2.2vw] light:text-light-lightText dark:text-dark-lightText font-semibold">
              Education Qualities
            </h3>
            <div className="text-primary font-semibold text-lg">
              2019 - 2025
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {education.map((elem, index) => (
              <div key={index} className="relative group">
                <div className="bg-dark-lightBackground/30 rounded-lg p-5 border border-primary/5 hover:border-primary/20 transition-all duration-300">
                  <div className="absolute -top-3 -right-2 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                    {elem.year}
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10">
                      <i className="bx bxs-graduation text-2xl text-primary"></i>
                    </div>
                    <h3 className="text-lg font-medium dark:text-dark-Text light:text-light-text">
                      {elem.title}
                    </h3>
                  </div>

                  <p className="text-sm dark:text-dark-lightText/60 line-clamp-3">
                    {elem.description ||
                      "Worked on various web development projects using modern technologies and best practices. Collaborated with team members to deliver high-quality solutions."}
                  </p>

                  <div className="mt-4 pt-3 border-t border-primary/5">
                    <div className="flex gap-2 flex-wrap">
                      {elem.experties.map((elm, i) => (
                        <span
                          className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80"
                          key={i}
                        >
                          {elm}
                        </span>
                      ))}

                      <span className="text-xs px-2 py-x1 rounded bg-primary/5 text-primary/80">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80">
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80">
                        MongoDB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
