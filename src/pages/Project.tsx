import PageHeading from "../components/PageHeading";
import projects from "../json/projects.json";

const Project = () => {
  return (
    <section className="content-center" id="project">
      <PageHeading title={"Project"} describe={"Previous work"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {projects.map((elem, index) => (
          <div key={index} className="relative group">
            <div className="bg-dark-lightBackground/30 rounded-lg p-5 border border-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="absolute -top-3 -right-2 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                {elem.title}
              </div>

              {/* Image Section */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={elem.img || "https://placehold.co/600x400"}
                  alt={elem.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300"
                />
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
                <i className="bx bx-link-external text-primary"></i>
                <a href={elem.url} target="_blank" rel="noopener noreferrer">
                  {elem.url || "Project URL"}
                </a>
              </div>

              <p className="text-sm dark:text-dark-lightText/60 line-clamp-2">
                {elem.description || "Project description coming soon..."}
              </p>
              <button
                onClick={(e) => {
                  const pElement = e.currentTarget
                    .previousElementSibling as HTMLElement;
                  if (pElement) {
                    pElement.classList.toggle("line-clamp-3");
                    e.currentTarget.textContent = pElement.classList.contains(
                      "line-clamp-2"
                    )
                      ? "Read More"
                      : "Read Less";
                  }
                }}
                className="text-primary hover:text-primary/80 text-sm"
              >
                Read More
              </button>

              <div className="mt-2 pt-1 border-t border-primary/5">
                <div className="flex gap-2 flex-wrap">
                  {elem.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-primary/5 text-primary/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
