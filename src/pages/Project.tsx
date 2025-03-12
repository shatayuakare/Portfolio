import PageHeading from "../components/PageHeading";
import projects from "../json/projects.json";

const Project = () => {
  return (
    <section className="content-center" id="project">
      <PageHeading title={"Project"} describe={"Previous work"} />

      <div className="div grid sm:grid-cols-1 md:grid-cols-3 md:gap-8 sm:gap-5 py-8">
        {projects.map((elem, index) => (
          <div
            className="dark:bg-dark-lightBackground light:bg-light-lightBackground relative rounded-xl overflow-hidden shadow-xl"
            key={index}
          >
            <button className="btn btn-ghost light:bg-light-lightBackground dark:bg-dark-lightBackground absolute top-2 right-2 rounded-full h-12 w-12 p-0">
              <i className="bx bx-link-external dark:text-dark-text text-xl"></i>
            </button>
            <div className="bg-blue-200 h-52 overflow-hidden">
              <img
                className="hover:scale-105 duration-300 h-full w-full"
                src={elem.img}
                alt={elem.title}
              />
            </div>
            <div className="p-5 mt-3 dark:text-dark-lightText light:text-light-lightText">
              <h4 className="font-semibold dark:text-dark-text light:text-light-text text-2xl">
                {elem.title}
              </h4>
              <div className="flex flex-wrap gap-y-2 mt-2 gap-x-1">
                {elem.skills.map((elm, i) => (
                  <div
                    className="bg-zinc-700 rounded-full w-fit text-sm px-3"
                    key={i}
                  >
                    {elm}
                  </div>
                ))}
              </div>
              <p className="mb-2 dark:text-dark-lightText light:text-light-lightText line-clamp-3">
                {elem.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
