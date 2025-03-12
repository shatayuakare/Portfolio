import { useEffect, useState } from "react";

const Header = () => {
  const [sticky, setSticky] = useState<boolean>();

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Sticky Header Logic
      if (scrollY >= 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      // Index Logic
      const newIdx = Math.floor(scrollY / windowHeight);
      setIdx(newIdx);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <header
      className={`navbar z-[9] md:px-14 font-semibold w-full py-0 ${
        sticky
          ? "dark:bg-white light:bg-black fixed dark:text-black light:text-white shadow"
          : "absolute top-0 left-0"
      } `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className={idx == 0 ? "active" : ""} onClick={() => setIdx(0)}>
              <a href={"#home"}>Home</a>
            </li>
            <li className={idx == 1 ? "active" : ""} onClick={() => setIdx(1)}>
              <a href={"#servises"}>Services</a>
            </li>
            <li className={idx == 2 ? "active" : ""} onClick={() => setIdx(2)}>
              <a href={"#project"}>Projects</a>
            </li>
            <li className={idx == 3 ? "active" : ""} onClick={() => setIdx(3)}>
              <a href={"#resume"}>Resume</a>
            </li>
            <li className={idx == 4 ? "active" : ""} onClick={() => setIdx(4)}>
              <a href={"#contact"}>Contact</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost sm:btn-sm md:btn-lg sm:m-0 font-['Orbitron']  text-primary text-xl">
          Shatayu Akare
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={idx == 0 ? "active" : ""} onClick={() => setIdx(0)}>
            <a href={"#home"}>Home</a>
          </li>
          <li className={idx == 1 ? "active" : ""} onClick={() => setIdx(1)}>
            <a href={"#servises"}>Services</a>
          </li>
          <li className={idx == 2 ? "active" : ""} onClick={() => setIdx(2)}>
            <a href={"#project"}>Projects</a>
          </li>
          <li className={idx == 3 ? "active" : ""} onClick={() => setIdx(3)}>
            <a href={"#resume"}>Resume</a>
          </li>
          <li className={idx == 4 ? "active" : ""} onClick={() => setIdx(4)}>
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost rounded-full text-white sm:btn-sm sm:bg-blue-500  md:h-10 min-h-8 md:bg-primary">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
